<template>
  <div class="home">
    <v-container fluid >
      <v-layout>
        <v-flex >
          <v-carousel
              cycle
              show-arrows-on-hover

          >
            <v-carousel-item
                v-for="(item, i) in items"
                :key="i"

            >
<!--              <v-sheet-->
<!--                  :color="colors[i]"-->
<!--                  height="100%"-->
<!--              >-->
<!--                <v-row-->
<!--                    class="fill-height"-->
<!--                    align="center"-->
<!--                    justify="center"-->
<!--                >-->
<!--                  <div class="display-3">-->
<!--                    {{ slide }} Slide-->
<!--                  </div>-->
<!--                </v-row>-->
<!--              </v-sheet>-->


                  <v-img :src="item.src"></v-img>





            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex v-for="image in images">

            <v-card
                class="mx-auto my-12"
                max-width="323"
            >
              <v-card-title class="justify-center">{{image.title}}</v-card-title>
            <v-img
                :src="image.src"
                height="460px"
                width="323"
                class="justify-center"
            >
            </v-img>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-container class="py-10">
    <p>f</p>
    <p>f</p>
    <p>f</p>
    <p>f</p>
    <p>f</p>
    <p>f</p>
    <p>f</p>
    <p>f</p>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    items: [
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0118/20190118102526280.jpg'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0126/20190126115119666.jpg'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0116/20190116044605480.jpg'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0116/20190116044503409.jpg'}
    ],
    images: [
      {src:'http://www.lynchpin.com.cn/uploadfile/2021/0302/20210302092233163.png',title:'无线通信'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0319/20190319024152286.png',title:'计算机软件'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2021/0301/20210301092138399.png',title:'人工智能'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0318/20190318094535255.jpg',title:'信息科普'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2020/0130/20200130124713506.jpg',title:'招考就业'},
      {src:'http://www.lynchpin.com.cn/uploadfile/2019/0319/20190319024227688.png',title:'临菲学堂'},
    ]
  }),
}
</script>
