<template>
  <div ref="chartContainer" style="width: 100%; height: 500px"></div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted() {
    let dataObj = { 新办: 25, 变更: 30, 延续: 20, 注销: 10, 补发: 20, 补录: 100 };
    let colorObj = { startColor: "#248ff7", endColor: "#6851f1" };
    // let colorObj =  { startColor: "#2facf5", endColor: "#78b6fc" };
    this.renderChart(dataObj, colorObj);
  },
  created() {},
  methods: {
    renderChart(dataObj, colorObj) {
      const chartContainer = this.$refs.chartContainer;
      const myChart = echarts.init(chartContainer);
      // 在这里配置你的图表选项和数据
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "14%",
          top: "16%",
          containLabel: true,
        },
        xAxis: {
          show: true,
          type: "category",
          data: Object.keys(dataObj),
          axisLine: {
            lineStyle: {
              color: "black",
              width: 1,
              type: "solid",
            },
            show: true, // 显示 X 轴线
            axisTick: {
              show: false, // 隐藏刻度线
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: "Microsoft YaHei",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            // 显示 Y 轴刻度标签
            show: true,
            textStyle: {
              fontSize: 12,
              color: "#333",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#9195a3",
            },
          },
        },

        series: [
          {
            name: "1",
            type: "bar",
            barWidth: "25%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: colorObj.startColor,
                  },
                  {
                    offset: 1,
                    color: colorObj.endColor,
                  },
                ]),
              },
            },
            label: {
              show: true,
              position: "top", // 文字显示在柱状图的上方
              formatter: "{c}", // 显示数据值
            },
            data: Object.values(dataObj),
          },
        ],
      };
      var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
      }, 1000);
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
/* 样式可以根据需求自定义 */
</style>