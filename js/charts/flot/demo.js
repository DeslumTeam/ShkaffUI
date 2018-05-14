$(function(){

  var da1 = [],
      series = 3;
      chart_names = ['Proccess', 'Success', 'Fail'];
  for (var i = 0; i < series; i++) {
    da1[i] = {
      label: chart_names[i],
      data: Math.floor(Math.random() * 100) + 1
    }
  }
  $("#flot-pie-operator").length && $.plot($("#flot-pie-operator"), da1, {
    series: {
      pie: {
        innerRadius: 0.5,
        show: true
      }
    },
    colors: ["#99c7ce","#999999","#bbbbbb"],
    grid: {
        hoverable: true,
        clickable: false
    },
    tooltip: true,
    tooltipOpts: {
      content: "%s: %p.0%"
    }
  });

//   $("#flot-pie-dump").length && $.plot($("#flot-pie-dump"), da1, {
//     series: {
//       pie: {
//         innerRadius: 0.5,
//         show: true
//       }
//     },
//     colors: ["#99c7ce","#999999","#bbbbbb","#dddddd","#f0f0f0"],
//     grid: {
//         hoverable: true,
//         clickable: false
//     },
//     tooltip: true,
//     tooltipOpts: {
//       content: "%s: %p.0%"
//     }
//   });
//   $("#flot-pie-restore").length && $.plot($("#flot-pie-restore"), da1, {
//     series: {
//       pie: {
//         innerRadius: 0.5,
//         show: true
//       }
//     },
//     colors: ["#99c7ce","#999999","#bbbbbb","#dddddd","#f0f0f0"],
//     grid: {
//         hoverable: true,
//         clickable: false
//     },
//     tooltip: true,
//     tooltipOpts: {
//       content: "%s: %p.0%"
//     }
//   });
});