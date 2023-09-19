<template>
  <div>
    <div>
      <el-card
        v-for="(item, index) in items"
        :key="item.id"
        shadow="hover"
        style="display: inline-block; width: 15%; margin: 20px"
      >
        <div
          slot="header"
          class="cards"
        >
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
          
        </div>
        <div>{{ item.content }}</div>
      </el-card>
    </div>
    <el-pagination
      v-if="total > pageSize"
      style="margin-top: 20px; text-align: center"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20, 50, 100]"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 50,
      items: [],
    };
  },
  created() {
    this.getDatas()
  },
  methods: {
    getDatas(curPage=1, curPagesize=10) {
      setTimeout(() => {
        this.items = [
          {
            id: 1,
            title: "Card Title 1",
            date: "2023/08/01",
            content: "Card content 1",
          },
          {
            id: 2,
            title: "Card Title 2",
            date: "2023/08/02",
            content: "Card content 2",
          },
          {
            id: 3,
            title: "Card Title 3",
            date: "2023/08/03",
            content: "Card content 3",
          },
          {
            id: 4,
            title: "Card Title 4",
            date: "2023/08/04",
            content: "Card content 4",
          },
          {
            id: 5,
            title: "Card Title 5",
            date: "2023/08/05",
            content: "Card content 5",
          },
          {
            id: 6,
            title: "Card Title 6",
            date: "2023/08/06",
            content: "Card content 6",
          },
          {
            id: 7,
            title: "Card Title 7",
            date: "2023/08/07",
            content: "Card content 7",
          },
          {
            id: 8,
            title: "Card Title 8",
            date: "2023/08/08",
            content: "Card content 8",
          },
          {
            id: 9,
            title: "Card Title 9",
            date: "2023/08/09",
            content: "Card content 9",
          },
          {
            id: 10,
            title: "Card Title 10",
            date: "2023/08/10",
            content: "Card content 10",
          },
          {
            id: 11,
            title: "Card Title 11",
            date: "2023/08/11",
            content: "Card content 11",
          },
          {
            id: 12,
            title: "Card Title 12",
            date: "2023/08/12",
            content: "Card content 12",
          },
          {
            id: 13,
            title: "Card Title 13",
            date: "2023/08/13",
            content: "Card content 13",
          },
          {
            id: 14,
            title: "Card Title 14",
            date: "2023/08/14",
            content: "Card content 14",
          },
          {
            id: 15,
            title: "Card Title 15",
            date: "2023/08/15",
            content: "Card content 15",
          },
          {
            id: 16,
            title: "Card Title 16",
            date: "2023/08/16",
            content: "Card content 16",
          },
          {
            id: 17,
            title: "Card Title 17",
            date: "2023/08/17",
            content: "Card content 17",
          },
          {
            id: 18,
            title: "Card Title 18",
            date: "2023/08/18",
            content: "Card content 18",
          },
          {
            id: 19,
            title: "Card Title 19",
            date: "2023/08/19",
            content: "Card content 19",
          },
          {
            id: 20,
            title: "Card Title 20",
            date: "2023/08/20",
            content: "Card content 20",
          },
          {
            id: 21,
            title: "Card Title 21",
            date: "2023/08/21",
            content: "Card content 21",
          },
          {
            id: 22,
            title: "Card Title 22",
            date: "2023/08/22",
            content: "Card content 22",
          },
          {
            id: 23,
            title: "Card Title 23",
            date: "2023/08/23",
            content: "Card content 23",
          },
          {
            id: 24,
            title: "Card Title 24",
            date: "2023/08/24",
            content: "Card content 24",
          },
          {
            id: 25,
            title: "Card Title 25",
            date: "2023/08/25",
            content: "Card content 25",
          },
        ];
        this.items = this.items.slice(10 * (curPage - 1), curPagesize *curPage);
      }, 1000);
    },
    handlePageChange(currentPage) {
      console.log(currentPage, "currentPagecurrentPage");
      this.currentPage = currentPage;
      this.getDatas(currentPage,10)
      // 发起分页请求获取数据
      // ...
    },
  },
};
</script>

<style scoped>
.cards{
 display: flex; 
 justify-content: space-between;
}
.cards:hover{
  display: none;
}
.show_card{
  display: none;
}
.show_card:hover{
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
