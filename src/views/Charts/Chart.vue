<template>
  <div>
    <input type="text" v-model="roleabdel" />
    <pre>{{ currentUser }}--{{token}} <div v-if="token == null"> Soy nuloooo </div></pre>
    <v-chart :options="chartOptionsBar" autoresize></v-chart>
    <v-chart :init-options="initOptions" :options="option" autoresize></v-chart>
  </div>
</template>
<style>
.echarts {
  width: 100%;
  height: 300px;
}
</style>
<script>
import { Role } from "../../_Helpers/role";
import { mapState } from "vuex";
import jwt_decode from "jwt-decode";
export default {
  computed: {
    ...mapState(["currentUser"]),
    token() {
      if (this.currentUser.token != null) {
        return jwt_decode(this.currentUser.token);
      } else {
        return null;
      }
    }
  },
  data() {
    return {
      roleabdel: Role.Admin,

      initOptions: {
        renderer: "canvas"
      },
      chartOptionsBar: {
        legend: {},
        tooltip: {},
        xAxis: {
          data: ["Q1", "Q2", "Q3", "Q4"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "bar",
            data: [63, 75, 24, 92]
          }
        ]
      },
      option: {
        title: {
          text: "abdelkarin"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["uno", "dos", "tres", "cuatro", "cinco"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "uno",
            type: "line",
            stack: "1",
            data: [150, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "dos",
            type: "line",
            stack: "2",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "tres",
            type: "line",
            stack: "3",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "cuatro",
            type: "line",
            stack: "4",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "cinco",
            type: "line",
            stack: "5",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    };
  }
};
</script>
