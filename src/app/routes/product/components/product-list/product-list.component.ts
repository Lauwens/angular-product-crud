import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '@product/models/product.model';
import * as ProductActions from '@product/store/product.actions';
import { DeleteDialogComponent } from '@shared/components/delete-dialog.component';
import { tableRowAnimation } from '@shared/animations/template.animations';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  animations: [tableRowAnimation],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: MatTableDataSource<Product>;

  displayedColumns: string[] = [
    'name',
    'description',
    'stock',
    'value',
    'actions',
  ];

  public stockSparklineOptions: Partial<ApexOptions> = {
    chart: {
      type: 'line',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  private router = inject(Router);
  private dialog = inject(MatDialog);
  private store = inject(Store<{ products: Product[] }>);

  constructor() {
    this.dataSource = new MatTableDataSource<Product>([]);
  }

  ngOnInit() {
    this.store
      .select((state) => state.products)
      .subscribe((data) => {
        this.dataSource.data = data.products;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editProduct(product: Product) {
    this.router.navigate(['/products/' + product.id + '/edit']);
  }

  deleteProduct(product: Product) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { product: product },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(ProductActions.deleteProduct({ id: product.id }));
      }
    });
  }

  addProduct() {
    this.router.navigate(['/products/create']);
  }

  viewProduct(product: Product) {
    this.router.navigate(['/products/' + product.id]);
  }

  getStockSeries(product: Product) {
    const options: ApexOptions = {
      series: [
        {
          name: '',
          data: product.stockHistory?.map(({ stock }) => stock) ?? [],
        },
      ],
    };
    return options;
  }
}
