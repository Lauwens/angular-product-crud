import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@product/models/product.model';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-product-stock-chart',
  templateUrl: './product-stock-chart.component.html',
  styleUrl: './product-stock-chart.component.scss',
})
export class ProductStockChartComponent implements OnInit, OnChanges {
  stockChartOptions!: Partial<ApexOptions>;
  products!: Product[];

  private store = inject(Store<{ products: Product[] }>);

  constructor() {}

  ngOnInit() {
    this.store
      .select((state) => state.products)
      .subscribe((data) => {
        this.products = data.products;
        this.updateStockChart();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.updateStockChart();
    }
  }

  private updateStockChart() {
    const stockData = this.products.map((product) => product.stock);
    const totalStock = stockData.reduce((a, b) => a + b, 0);
    const averageStock = totalStock / stockData.length;

    this.stockChartOptions = {
      series: [
        {
          name: '',
          data: stockData,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.products.map((product) => product.name),
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
        tooltip: {
          enabled: false,
        },
      },
      title: {
        text: `Stock Levels (Average: ${averageStock.toFixed(2)})`,
        align: 'center',
      },
      tooltip: {
        enabled: false,
      },
    };
  }
}
