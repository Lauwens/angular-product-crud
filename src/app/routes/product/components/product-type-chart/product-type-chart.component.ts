import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductSelectors from '@product/store/product.selectors';
import { ApexOptions } from 'ng-apexcharts';

export
@Component({
  selector: 'app-product-type-chart',
  templateUrl: './product-type-chart.component.html',
  styleUrl: './product-type-chart.component.scss',
})
class ProductTypeChartComponent implements OnChanges {
  private store = inject(Store);

  typeChartOptions!: Partial<ApexOptions>;
  categoryCounts: { category: string; count: number }[] | undefined;

  constructor() {
    this.store
      .select(ProductSelectors.selectCategoryCounts)
      .subscribe((data) => {
        this.categoryCounts = data;
        this.updateTypeChart();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryCounts']) {
      this.updateTypeChart();
    }
  }

  private updateTypeChart() {
    const series = this.categoryCounts?.map(({ count }) => count / 10);
    const labels = this.categoryCounts?.map(({ category }) => category);

    this.typeChartOptions = {
      series: series,
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      labels: labels,
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex] * 10
          );
        },
        itemMargin: {
          horizontal: 3,
        },
      },
      responsive: [],
    };
  }
}
