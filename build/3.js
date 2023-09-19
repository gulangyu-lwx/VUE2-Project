var option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
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
    data: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],

    axisLine: {
      lineStyle: {
        color: "#9195a3",
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
    max: "1200",

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
              color: "#248ff7",
            },
            {
              offset: 1,
              color: "#6851f1",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "top", // 文字显示在柱状图的上方
        formatter: "{c}", // 显示数据值
      },
      data: [400, 600, 700, 700, 1000, 400, 400, 600, 700],
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
