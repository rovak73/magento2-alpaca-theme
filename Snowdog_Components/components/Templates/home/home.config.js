module.exports = {
  context: {
    mainSlider: {
      class: 'section--secondary',
      heading: false,
      components: [
        {
          content: {
            content: 'slider',
            contentContext: {
              script: true,
              heading: false
            }
          }
        }
      ]
    //mainSlider end
    },
    briefInfo: {
      class: 'display-none-m',
      heading: false,
      components: [
        {
          content: {
            content: 'brief-info--dividers',
            contentContext: ''
          }
        }
      ]
    //briefInfo end
    },
    categoryBanners: {
      class: 'section--fix-spacer-large',
      heading: {
        content: 'heading',
        contentContext: {
          tag: 'h2',
          class: 'heading--first-level margin-0',
          text: 'Shop by category'
        }
      },
      contentClass: 'row',
      components: [
        {
          content: {
            content: 'banner--secondary',
            contentContext: {
              text: 'Clothing',
              class: 'col-xs-6 col-lg-3 margin-bottom-l',
              image: {
                defaultSrc: '/images/home/banners/category-clothing-144_200.jpg',
                sources: [
                  {
                    src: '/images/home/banners/category-clothing-320_432.jpg',
                    mediaQuery: '(max-width: 1200px)'
                  },
                  {
                    src: '/images/home/banners/category-clothing-320_432.jpg',
                    mediaQuery: ''
                  }
                ]
              }
            }
          }
        },
        {
          content: {
            content: 'banner--secondary',
            contentContext: {
              text: 'Shoes',
              class: 'col-xs-6 col-lg-3 margin-bottom-l',
              image: {
                defaultSrc: '/images/home/banners/category-shoes-144_200.jpg',
                sources: [
                  {
                    src: '/images/home/banners/category-shoes-320_432.jpg',
                    mediaQuery: '(max-width: 1200px)'
                  },
                  {
                    src: '/images/home/banners/category-shoes-320_432.jpg',
                    mediaQuery: ''
                  }
                ]
              }
            }
          }
        },
        {
          content: {
            content: 'banner--secondary',
            contentContext: {
              text: 'Accessories',
              class: 'col-xs-6 col-lg-3 margin-bottom-l',
              image: {
                defaultSrc: '/images/home/banners/category-accessories-144_200.jpg',
                sources: [
                  {
                    src: '/images/home/banners/category-accessories-320_432.jpg',
                    mediaQuery: '(max-width: 1200px)'
                  },
                  {
                    src: '/images/home/banners/category-accessories-320_432.jpg',
                    mediaQuery: ''
                  }
                ]
              }
            }
          }
        },
        {
          content: {
            content: 'banner--secondary',
            contentContext: {
              text: 'New In',
              class: 'col-xs-6 col-lg-3 margin-bottom-l',
              image: {
                defaultSrc: '/images/home/banners/category-new-in-144_200.jpg',
                sources: [
                  {
                    src: '/images/home/banners/category-new-in-320_432.jpg',
                    mediaQuery: '(max-width: 1200px)'
                  },
                  {
                    src: '/images/home/banners/category-new-in-320_432.jpg',
                    mediaQuery: ''
                  }
                ]
              }
            }
          }
        }
      ]
    //categoryBanners end
    },
    additionalBanners: {
      class: 'section--fix-spacer-medium',
      heading: false,
      contentClass: 'row',
      components: [
        {
          content: {
            content: 'banner',
            contentContext: {
              class: 'col-xs-12 col-lg-6 margin-bottom-m',
              image: {
                defaultSrc: '/images/home/banners/banner-small-women-now-304_128.jpg',
                sources: [
                  {
                    src: '/images/home/banners/banner-medium-women-now-656_264.jpg',
                    mediaQuery: '(max-width: 768px)'
                  },
                  {
                    src: '/images/home/banners/banner-medium-women-now-656_264.jpg',
                    mediaQuery: ''
                  }
                ]
              }
            }
          }
        },
        {
          content: {
            content: 'banner',
            contentContext: {
              class: 'col-xs-12 col-lg-6 margin-bottom-m',
              image: {
                defaultSrc: '/images/home/banners/banner-small-men-now-304_128.jpg',
                sources: [
                  {
                    src: '/images/home/banners/banner-medium-men-now-656_264.jpg',
                    mediaQuery: '(max-width: 768px)'
                  },
                  {
                    src: '/images/home/banners/banner-medium-men-now-656_264.jpg',
                    mediaQuery: ''
                  }
                ]
              }
            }
          }
        }
      ]
    //additionalBanners end
    },
    popularProducts: {
      heading: false,
      contentClass: 'section__content--products',
      components: [
        {
          content: {
            content: 'slider--products',
            contentContext: {
              script: true,
              heading: {
                content: 'heading',
                contentContext: {
                  tag: 'h2',
                  class: 'heading--first-level margin-0',
                  text: 'Popular products'
                }
              }
            }
          }
        }
      ]
    //popularProducts end
    },
    teasers: {
      heading: false,
      contentClass: '',
      components: [
        {
          content: {
            content: 'teaser--secondary',
            contentContext: ''
          }
        }
      ]
    //teasers end
    },
    newProducts: {
      heading: false,
      contentClass: 'section__content--products',
      components: [
        {
          content: {
            content: 'slider--products',
            contentContext: {
              script: true,
              heading: {
                content: 'heading',
                contentContext: {
                  tag: 'h2',
                  class: 'heading--first-level margin-0',
                  text: 'New products'
                }
              }
            }
          }
        }
      ]
    //newProducts end
    },
    brands: {
      heading: false,
      contentClass: '',
      components: [
        {
          content: {
            content: 'slider--brands',
            contentContext: {
              script: true,
              heading: {
                content: 'heading',
                contentContext: {
                  tag: 'h2',
                  class: 'heading--first-level margin-0',
                  text: 'Top brands'
                }
              }
            }
          }
        }
      ]
    //brands end
    },
    content: {
      heading: false,
      contentClass: '',
      components: [
        {
          content: {
            content: 'content-block--secondary',
            contentContext: ''
          }
        }
      ]
    //content end
    }
  }
}
