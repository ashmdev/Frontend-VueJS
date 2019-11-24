<template>
  <v-app>
    <v-app-bar app color="#2E3D93" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>The Fake</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text> <v-icon color="red">close</v-icon> Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>
      <v-btn icon>
        <v-icon>heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>close</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      absolute
      dark
      src="https://i.pinimg.com/originals/b0/ef/d9/b0efd9474a44bf1220f89f43cbc71d49.png"
      :mini-variant.sync="mini"
      app
      v-model="drawer"
      :permanent="drawer"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>build</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> sdfsdf</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>bar_chart</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> sdfsdf</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    mini: true
  })
};
</script>
