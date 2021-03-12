<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
          </v-list-item-title>
          <v-list-item-subtitle>

          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
        src="https://images2015.cnblogs.com/blog/712650/201509/712650-20150901130405528-1386591357.jpg"

    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>临菲信息技术港</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <div class="text-center">
        <v-menu transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="">
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
<!--      <v-btn icon>-->
<!--        <v-icon>mdi-dots-vertical</v-icon>-->
<!--      </v-btn>-->
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: '网站首页', icon: 'mdi-view-dashboard', to:'/'},
      { title: '无线通信', icon: 'mdi-view-dashboard', to:'/wireless'},
      { title: '计算机与软件', icon: 'mdi-image',to:'/computer'},
      { title: '人工智能', icon: 'mdi-help-box',to:'/intelligence'},
      { title: '科普信息', icon: 'mdi-help-box',to:'/information'},
      { title: '招考留学', icon: 'mdi-help-box',to:'/test_and_job'},
      { title: '临菲学堂', icon: 'mdi-help-box',to:'/school'},
      { title: '专业社区', icon: 'mdi-help-box',to:'/technical'},
      { title: '定制服务', icon: 'mdi-help-box',to:'/custom'},
      { title: '关于我们', icon: 'mdi-help-box', to:'/about'},
    ],
  }),
}
</script>
