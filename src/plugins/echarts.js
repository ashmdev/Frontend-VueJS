import Vue from "vue";
import ECharts from "vue-echarts";

import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";

import "echarts/lib/chart/scatter";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/geo";

import "echarts/lib/component/visualMap";
import "echarts/lib/component/dataset";

import "echarts/map/js/world";
import "zrender/lib/svg/svg";
Vue.component("v-chart", ECharts);
