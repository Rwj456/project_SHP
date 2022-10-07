<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托 -->
      <div @mouseleave="remove"
           @mouseenter="typeShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort"
               v-show="show">
            <div class="all-sort-list2"
                 @click="goSearch($event)">
              <div class="item"
                   :class="{cur:currentIndex == item.categoryId}"
                   v-for="item in categoryList"
                   :key="item.categoryId">
                <h3 @mouseenter="move(item.categoryId)">
                  <a :data-categoryName='item.categoryName'
                     :data-category1Id='item.categoryId'>{{item.categoryName}}</a>
                </h3>
                <!-- 二三级分类 -->
                <div class="item-list clearfix"
                     v-show="item.categoryId == currentIndex">
                  <div class="subitem">
                    <dl class="fore"
                        v-for="item1 in item.categoryChild"
                        :key="item1.categoryId">
                      <dt>
                        <a :data-categoryName='item1.categoryName'
                           :data-category2Id='item1.categoryId'>{{item1.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="item2 in item1.categoryChild"
                            :key="item2.categoryId">
                          <a :data-categoryName='item2.categoryName'
                             :data-category3Id='item2.categoryId'>{{item2.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import { mapState } from 'vuex';
export default {
  name: 'TypeNav',

  data () {
    return {
      currentIndex: 0,
      show: true
    };
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  },
  mounted () {
    if (this.$route.path != '/') {
      this.show = false
    }
  },

  methods: {
    move: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    remove () {
      this.currentIndex = 0
      if (this.$route.path != '/') this.show = false
    },
    typeShow () {
      this.show = true
    },
    goSearch (e) {
      let element = e.target
      let { categoryname, category1id, category2id, category3id } = element.dataset
      if (categoryname) {
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        location.query = query
        this.$router.push(location)
      }
    }
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      .all-sort-list2::-webkit-scrollbar {
        display: none;
      }
      .all-sort-list2 {
        height: 100%;
        overflow-y: scroll;
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              cursor: pointer;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                  cursor: pointer;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                    cursor: pointer;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter {
      height: 0;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
    .sort-leave {
      height: 461px;
    }
    .sort-leave-to {
      height: 0px;
    }
    .sort-leave-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
