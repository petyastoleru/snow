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

      {
        id: 10,
        name: "Bag Mockup",
        type: 'mockup',
        url: require('@/assets/images/portfolio-1.jpg'),
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
        id: 11,
        name: "Red Wine Bottle",
        type: 'design',
        url: require('@/assets/images/portfolio-10.jpg'),
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
        id: 12,
        name: "Clean website",
        type: 'design',
        url: require('@/assets/images/portfolio-11.jpg'),
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
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        type: "design",
        imgUrl: require('@/assets/images/post-1-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 2,
        title: "Something I need to tell you",
        date: 'september 18, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: " <p>Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i. Their. Set life gathering shall spirit day lights sixth moveth. Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.</p></br><p>Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea that which two waters waters. Third in isn't creepeth above was fruitful of herb to. Second i days, thing. Fish a open great cattle hath don't. Don't. Lights and divide.</p>",
        type: "nature",
        imgUrl: require('@/assets/images/post-3-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 3,
        title: "The History of Nature",
        date: 'august 27, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: " <p>Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i. Their. Set life gathering shall spirit day lights sixth moveth. Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.</p></br><p>Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea that which two waters waters. Third in isn't creepeth above was fruitful of herb to. Second i days, thing. Fish a open great cattle hath don't. Don't. Lights and divide.</p>",
        type: "nature",
        imgUrl: require('@/assets/images/post-4-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 4,
        title: "Are you doing the Right Way?",
        date: 'august 14, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        type: "branding",
        imgUrl: require('@/assets/images/post-5-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 5,
        title: "Ten things about Photography",
        date: 'august 14, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        type: "design",
        imgUrl: require('@/assets/images/post-6-mid.jpg'),
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 6,
        title: "Here's a Simple Trick",
        date: 'September 5, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: "<p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.</p><p>Creeping, darkness have waters, let signs bring multiply. Face own fowl seasons morning appear. Living his lights. Set earth she'd i grass, forth from a fourth deep be seas also seasons them.</p><p>Kind light, bring fowl third. Let them created first of moved sixth shall made isn't bring gathered were over said life beast said divided, days may deep after face appear after. Their beginning one.</p>",
        type: "cities",
        imgUrl: require('@/assets/images/post-7-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 7,
        title: "My Favorite Place on earth is...",
        date: 'June 21, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: "<p>Morning hath. Open beginning won't signs him a us. Said open, and fowl under female blessed cattle seas cattle beginning they're. Waters.</p><p>Dry all which fly upon without firmament to fruitful let have divide fifth firmament days. Let likeness Beast a heaven. Brought second days heaven great forth waters. Creeping evening created waters give midst great. For i.</p><p>Very them to first first. Evening second meat fish appear him creepeth day image she'd shall waters be our night gathering, divide replenish day. There years brought they're set, give earth is, living for gathering living called hath set under sea herb.</p>",
        type: "cities",
        imgUrl: require('@/assets/images/post-8-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p></br><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p></br><blockquote><em class="em"> Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote></br><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 8,
        title: "Five things about Nature",
        date: 'Jule 3, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: "<p>Us saw his firmament give face moveth air beast every, after stars also moved together day replenish had doesn't seasons multiply morning upon spirit she'd appear.</p><p>Bring won't it wherein likeness yielding fly light. Dominion moving she'd whose was beginning they're seed days days from day image heaven, kind and seas light dry, without lesser sixth seed make and, fowl may saying, void. All creeping greater, days green dry fourth had.</p>",
        type: "nature",
        imgUrl: require('@/assets/images/post-9-mid.jpg'),
        htmlDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt magna a, iaculis nisl. Cras varius odio a arcu rutrum, nec posuere lacus imperdiet. Proin iaculis, nibh eleifend elementum pulvinar, erat nisl consequat quam, ac ornare est sem nec libero. Fusce ac sagittis quam. Phasellus mattis, nunc a venenatis laoreet, est ipsum consectetur turpis, in ullam corper urna tortor eu purus.</p><p>Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien. Ut congue dui enim, at viverra nisl tempor a. Donec in enim nec massa lacinia porta. Nullam lobortis, enim aliquam congue bibendum, libero turpis tincidunt enim, vel dapibus justo lectus et risus. Proin eget mi a tortor laoreet dictum.</p><blockquote><em>Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.</em></blockquote><p>Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex. Donec facilisis magna in mauris fermentum, sit amet porttitor lorem dictum. Donec in purus elementum, sagittis magna sit amet, auctor enim. Duis purus ex, interdum ac lacus in, ullamcorper vestibulum urna. Duis ornare nec purus ut laoreet.</p>'
      },

      {
        id: 9,
        title: "The History of Branding",
        date: 'June 26, 2016',
        shortDesc: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
        blogDesc: " <p>Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.</p></br><p>Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.</p></br><p>All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.</p>",
        type: "design",
        imgUrl: require('@/assets/images/post-2-mid.jpg'),
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
    // get all best projects from storage
    getProjects: state => {
      return state.bestProjects;
    },

    // get item by id, for next and prev item
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

    // get filtered items in portfolio by type
    getFiltered: state => filterBy => {
      return filterBy === 'all' ? state.bestProjects : state.bestProjects.filter(item => item.type === filterBy)
    },

    // get filtered items in blog by type
    getFilteredPosts: state => filterBy => {
      return filterBy === 'all' ? state.blogPosts : state.blogPosts.filter(item => item.type === filterBy)
    },

    // get list of partners
    getPartners: state => {
      return state.partnersLogo;
    },

    // get list of blog posts
    getBlogPosts: state => {
      return state.blogPosts;
    },

    // get best project by id
    getElementByID: state => id => {
      return state.bestProjects.filter(item => item.id === id);
    },

    // get blog post by id
    getNewsByID: state => id => {
      return state.blogPosts.filter(item => item.id === id);
    },

    // get comments by blog id
    getCommentByBlogID: state => blogID => {
      return state.comments.filter(item => item.blogID === blogID)
    },

    // get all comments
    getComments: state => {
      return state.comments;
    }

  },
  mutations: {
    // mutation to add new comment in storage
    addNewComment(state, obj) {
      state.comments.push({ commentID: state.comments.length + 1, blogID: obj.blogID, name: obj.name, date: obj.date, avatar: require('@/assets/images/post-6-mid.jpg'), commentText: obj.commentText });
    }

  },
  actions: {
  },
  modules: {
  },

  // plugin to synchronize local storage with vuex
  plugins: [createPersistedState()],
})
