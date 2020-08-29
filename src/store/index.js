import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bestProjects: [
      {
        id: 1, name: "Vinyl Record", type: 'mockup',
        url: require('@/assets/images/portfolio-7-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 2,
        name: "Modern T-Shirt", type: 'print',
        url: require('@/assets/images/portfolio-4-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 3,
        name: "Minimal Bag",
        type: 'branding',
        url: require('@/assets/images/portfolio-5-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 4,
        name: "Clean & Groovy",
        type: 'design',
        url: require('@/assets/images/portfolio-9-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }

        ]
      },

      {
        id: 5,
        name: "Minimal Mobile App",
        type: 'design',
        url: require('@/assets/images/portfolio-3-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 6,
        name: "White T-Shirt",
        type: 'print',
        url: require('@/assets/images/portfolio-8-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 7,
        name: "Business Card",
        type: 'branding',
        url: require('@/assets/images/portfolio-2-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 8,
        name: "Heja Stockholm",
        type: 'photography',
        url: require('@/assets/images/portfolio-6-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },

      {
        id: 9,
        name: "Paper Bag",
        type: 'photography',
        url: require('@/assets/images/portfolio-12-sm.jpg'),
        desc: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        client: 'Anna Doe',
        date: '06.20.2016',
        share: [
          { desc: 'facebook', link: 'https://www.facebook.com/' },
          { desc: 'twitter', link: 'https://twitter.com/' },
          { desc: 'pinterest', link: 'https://www.pinterest.com/' }
        ]
      },
    ],

    partnersLogo: [
      require('@/assets/images/partner-logo-1-dark.png'),
      require('@/assets/images/partner-logo-2-dark.png'),
      require('@/assets/images/partner-logo-3-dark.png'),
      require('@/assets/images/partner-logo-4-dark.png'),
      require('@/assets/images/partner-logo-5-dark.png'),
      require('@/assets/images/partner-logo-6-dark.png'),
      require('@/assets/images/partner-logo-7-dark.png'),
      require('@/assets/images/partner-logo-8-dark.png'),
    ],

    blogPosts: [
      {
        id: 1,
        title: "Why you should Always First",
        date: 'august 14, 2016',
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        shortDesc: "Lights give have herb. First. Seed lesser his a fruit. Stars good divide fish appear don't, third deep.",
        type: "design",
        imgUrl: require('@/assets/images/post-1-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 2,
        title: "Something I need to tell you",
        date: 'september 18, 2016',
        blogDesc: " <p>Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i. Their. Set life gathering shall spirit day lights sixth moveth. Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.</p></br><p>Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea that which two waters waters. Third in isn't creepeth above was fruitful of herb to. Second i days, thing. Fish a open great cattle hath don't. Don't. Lights and divide.</p>",
        shortDesc: "That female isn't midst divide kind upon seas lights greater green creature lights brought.",
        type: "nature",
        imgUrl: require('@/assets/images/post-3-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 3,
        title: "The History of Nature",
        date: 'august 27, 2016',
        blogDesc: " <p>Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i. Their. Set life gathering shall spirit day lights sixth moveth. Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.</p></br><p>Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea that which two waters waters. Third in isn't creepeth above was fruitful of herb to. Second i days, thing. Fish a open great cattle hath don't. Don't. Lights and divide.</p>",
        shortDesc: "Third is fly. From one under in itself two waters, all own. Said male shall greater own grass.",
        type: "nature",
        imgUrl: require('@/assets/images/post-4-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 4,
        title: "Are you doing the Right Way?",
        date: 'august 14, 2016',
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        shortDesc: "Which all, morning isn't. Female and own living dry, and morning lesser first he stars under years thing.",
        type: "branding",
        imgUrl: require('@/assets/images/post-5-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 5,
        title: "Ten things about Photography",
        date: 'august 14, 2016',
        shortDesc: "Be forth, god for rule face abundantly all our two winged made. Is whose morning female.",
        type: "design",
        imgUrl: require('@/assets/images/post-6-mid.jpg'),
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },
    ],

    comments: [
      {
        commentID: 1,
        blogID: 1,
        name: 'John Leonard',
        date: "20 September, 2016",
        avatar: require('@/assets/images/post-6-mid.jpg'),
        commentText: "Nullam ac dui et purus malesuada gravida id fermentum orci. In eu ipsum quis urna hendrerit condimentum vitae a mauris. In congue turpis purus, vitae tempus ante id. Donec orci arcu, sagittis ut finibus vitae."
      },

      {
        commentID: 2,
        blogID: 1,
        name: 'John Leonard',
        date: "20 September, 2016",
        avatar: require('@/assets/images/post-6-mid.jpg'),
        commentText: "Nullam ac dui et purus malesuada gravida id fermentum orci. In eu ipsum quis urna hendrerit condimentum vitae a mauris. In congue turpis purus, vitae tempus ante id. Donec orci arcu, sagittis ut finibus vitae."
      },

      {
        commentID: 3,
        blogID: 2,
        name: 'John Leonard',
        date: "20 September, 2016",
        avatar: require('@/assets/images/post-6-mid.jpg'),
        commentText: "Nullam ac dui et purus malesuada gravida id fermentum orci. In eu ipsum quis urna hendrerit condimentum vitae a mauris. In congue turpis purus, vitae tempus ante id. Donec orci arcu, sagittis ut finibus vitae."
      },

      {
        commentID: 4,
        blogID: 3,
        name: 'John Leonard',
        date: "20 September, 2016",
        avatar: require('@/assets/images/post-6-mid.jpg'),
        commentText: "Nullam ac dui et purus malesuada gravida id fermentum orci. In eu ipsum quis urna hendrerit condimentum vitae a mauris. In congue turpis purus, vitae tempus ante id. Donec orci arcu, sagittis ut finibus vitae."
      },

    ]
  },
  getters: {
    getProjects: state => {
      return state.bestProjects;
    },
    getNextOrPrevProject: state => (currentId, isBlog) => {
      switch (true) {
        case currentId > (isBlog ? state.blogPosts.length : state.bestProjects.length): {
          currentId = 1;
        } break;
        case currentId < 1: {
          currentId = isBlog ? state.blogPosts.length : state.bestProjects.length
        } break;
      }
      return isBlog ? state.blogPosts.find(todo => todo.id === currentId) : state.bestProjects.find(todo => todo.id === currentId);
    },
    getFiltered: state => filterBy => {
      return filterBy === 'all' ? state.bestProjects : state.bestProjects.filter(item => item.type === filterBy)
    },
    getFilteredPosts: state => filterBy => {
      return filterBy === 'all' ? state.blogPosts : state.blogPosts.filter(item => item.type === filterBy)
    },
    getPartners: state => {
      return state.partnersLogo;
    },
    getBlogPosts: state => {
      return state.blogPosts;
    },
    getElementByID: state => id => {
      return state.bestProjects.filter(item => item.id === id);
    },
    getNewsByID: state => id => {
      return state.blogPosts.filter(item => item.id === id);
    },
    getCommentByBlogID: state => blogID => {
      return state.comments.filter(item => item.blogID === blogID)
    },
    getComments: state => {
      return state.comments;
    }

  },
  mutations: {
    /* setItem(state, item) {
      Object.assign(state.choosenItem, item)
    },
    setBlog(state, item) {
      Object.assign(state.choosenBlog, item)
    }, */
    addNewComment(state, obj) {
      state.comments.push({ commentID: state.comments.length + 1, blogID: obj.blogID, name: obj.name, date: "20 September, 2016", avatar: require('@/assets/images/post-6-mid.jpg'), commentText: obj.commentText });
    }

  },
  actions: {
  },
  modules: {

  },
  plugins: [createPersistedState()],
})
