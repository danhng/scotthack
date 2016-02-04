/**
 * @fileoverview Richer text ads UI, small middle button, richer text ads
 * click settings.
 */

var elements = {
  adContent: {
    type: 'shape',
    node_id: 'adContent',
    background_color_ids: 'logoBackColor'
  },
  colorSlot1: {
    type: 'shape',
    node_id: 'color-slot1',
    background_color_ids: 'textBackDarkColor'
  },
  colorSlot2: {
    type: 'shape',
    node_id: 'color-slot2',
    background_color_ids: 'textBackLightColor'
  },
  colorSlot3: {
    type: 'shape',
    node_id: 'color-slot3',
    background_color_ids: 'logoBackColor'
  },
  product1MCImage: {
    type: 'product',
    node_id: 'product-image',
  },
  text1TFText: {
    type: 'headline',
    node_id: 'headline',
    background_color_ids: 'textBackDarkColor'
  },
  text2TFText: {
    type: 'description',
    node_id: 'description',
    background_color_ids: 'logoBackColor'
  },
  clickTFText: {
    field_name: 'clickTFText',
    type: 'button',
    node_id: 'button',
    background_color_ids: 'textBackLightColor',
    weight: 1 / 36.0
  },
  displayUrl: {
    type: 'url',
    node_id: 'display-url',
    background_color_ids: 'logoBackColor'
  }
};

var spec = {
  elements: elements,
  font_scale_strategy: 'mega_title',
  variations: {
    square1: {
      calibrations: [
        'AspectRatioGE 2 5',
        'AspectRatioLE 0.5 0'
      ],
      styles: {
        'clickTFText': {
          'displayType': 'nessieButton',
        },
        'text1TFText': {
          'padding': '5% 0'
        }
      },
      colorSlot1: {
        type: 'element',
        spec: {
          element: 'colorSlot1'
        },
        left: '0',
        right: '0',
        top: '0',
        bottom: 'colorSlot1 6%',
      },
      colorSlot2: {
        type: 'element',
        spec: {
          element: 'colorSlot2'
        },
        left: '0',
        right: '0',
        top: 'colorSlot1 0',
        bottom: 'colorSlot2 32%',
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left right top bottom',
        left: 'min(20px, 8%)',
        right: 'min(20px, 8%)',
        top: '6%',
        bottom: 'text1 32%',
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        alignments: 'left right top',
        top: 'text1 4%',
        bottom: '34%',
        left: 'min(20px, 8%)',
        right: 'min(20px, 8%)'
      },
      url: {
        type: 'element',
        spec: {
          element: 'displayUrl'
        },
        alignments: 'bottom left right',
        top: '85%',
        left: 'min(20px, 8%)',
        right: 'min(20px, 8%)',
        bottom: '7%'
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'top bottom left right',
        top: 'text2 1px',
        left: 'min(20px, 8%)',
        right: 'min(20px, 8%)',
        bottom: 'url top 1px'
      }
    },
    tower1: {
      calibrations: [
        'AspectRatioGE 0.8 0'
      ],
      styles: {
        'clickTFText': {
          'displayType': 'nessieButton',
        },
        'text1TFText': {
          'padding': '10% 0'
        }
      },
      colorSlot1: {
        type: 'element',
        spec: {
          element: 'colorSlot1'
        },
        left: '0',
        right: '0',
        top: '0',
        bottom: 'colorSlot1 7%',
      },
      colorSlot2: {
        type: 'element',
        spec: {
          element: 'colorSlot2'
        },
        left: '0',
        right: '0',
        top: '7%',
        bottom: 'colorSlot2 30%',
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left right top bottom',
        left: '10%',
        right: '10%',
        top: '7%',
        bottom: 'text1 30%',
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        alignments: 'left right top',
        top: 'text1 6%',
        bottom: '60px',
        left: '10%',
        right: '10%'
      },
      url: {
        type: 'element',
        spec: {
          element: 'displayUrl'
        },
        alignments: 'top',
        top: 'text2 6%',
        left: '10%',
        right: '10%',
        bottom: '10px'
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'top bottom',
        top: 'url 6%',
        left: '10%',
        right: '10%',
        bottom: '8%'
      }
    },
    banner1: {
      calibrations: [
        'AspectRatioLE 2 0'
      ],
      styles: {
        'clickTFText': {
          'displayType': 'nessieButton'
        },
        'text1TFText': {
          'padding': '5% 10%'
        }
      },
      colorSlot1: {
        type: 'element',
        spec: {
          element: 'colorSlot1'
        },
        left: '0',
        right: 'colorSlot1 5%',
        top: '0px',
        bottom: '0',
      },
      colorSlot2: {
        type: 'element',
        spec: {
          element: 'colorSlot2'
        },
        left: '5%',
        right: 'colorSlot2 40%',
        top: '0',
        bottom: '0',
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left right top bottom',
        left: '5%',
        right: 'text1 40%',
        top: '7%',
        bottom: '8%',
      },
      text2AndUrl: {
        type: 'vertical-list',
        spec: {
          elements: ['text2TFText', 'displayUrl'],
          margin: '1px',
        },
        alignments: 'left',
        top: '10%',
        bottom: '10%',
        left: '49%',
        right: 'button 5%'
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'right',
        left: '75%',
        right: '6%',
        top: '5%',
        bottom: '5%'
      }
    }
  }
};

var smallSizeSpec = {
  elements: elements,
  variations: {
    tower_small: {
      calibrations: [
        'AspectRatioGE 2.5 0'
      ],
      styles: {
        'clickTFText': {
          'displayType': 'nessieButton',
        }
      },
      colorSlot1: {
        type: 'element',
        spec: {
          element: 'colorSlot1'
        },
        left: '0',
        right: '0',
        top: '0',
        bottom: 'colorSlot1 7%',
      },
      colorSlot2: {
        type: 'element',
        spec: {
          element: 'colorSlot2'
        },
        left: '0',
        right: '0',
        top: '7%',
        bottom: 'colorSlot2 30%',
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left right top bottom',
        left: '5%',
        right: '5%',
        top: '7%',
        bottom: 'text1 30%',
      },
      imageHolder: {
        type: 'element',
        spec: {
          element: 'imageHolder'
        },
        left: '0px',
        right: '0px',
        top: '70px',
        bottom: '0px',
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        alignments: 'left top',
        top: 'text1 5%',
        bottom: '60px',
        left: '10%',
        right: '10%'
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'bottom',
        top: '75%',
        left: '10%',
        right: '10%',
        bottom: '8%'
      },
      url: {
        type: 'element',
        spec: {
          element: 'displayUrl'
        },
        alignments: 'left top',
        top: 'text2 5px',
        left: '10%',
        right: '10%',
        bottom: 'button bottom 50% 10px'
      }
    },
    banner_small: {
      calibrations: [
        'AspectRatioLE 2 0'
      ],
      styles: {
        'clickTFText': {
          'displayType': 'nessieButton',
          'weight': 1 / 15.0
        },
        'displayUrl': {
          'font_level': 0
        }
      },
      colorSlot2: {
        type: 'element',
        spec: {
          element: 'colorSlot2'
        },
        left: '0',
        right: '20%',
        top: '0',
        bottom: '0'
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left right top bottom',
        left: '2%',
        right: '22%',
        top: '7%',
        bottom: '11%'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        alignments: 'left right top bottom',
        left: '2%',
        right: '22%',
        top: '7%',
        bottom: '10%',
        z_index: 1
      },
      url: {
        type: 'element',
        spec: {
          element: 'displayUrl'
        },
        alignments: 'left right top bottom',
        left: '2%',
        right: '22%',
        top: '20%',
        bottom: '30%',
        z_index: 2
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'left right',
        left: '81%',
        right: '1%',
        top: '2%',
        bottom: '2%'
      }
    }
  }
};

function onAdData(adData) {
  var ccm = adData['google_template_data']['adData'][0];
  ccm['siriusFlagBorderColor'] = '#BDBDBD';
  var landingPageColor0 = ccm['landingPageColor0'] ?
      ccm['landingPageColor0'] : '#000000';
  var landingPageColor1 = ccm['landingPageColor1'] ?
      ccm['landingPageColor1'] : landingPageColor0;
  var isBackColorWhite =
      sirius.color.getRgbDifference(landingPageColor0, '#FFFFFF') < 50 ||
      sirius.color.getRgbDifference(landingPageColor0, '#000000') < 50;
  var colorSeed = isBackColorWhite ? landingPageColor1 : landingPageColor0;
  ccm['textBackLightColor'] = sirius.color.selectBestMaterialColor(colorSeed);
  ccm['textBackDarkColor'] =
      sirius.color.getMaterial900ColorFrom500(ccm['textBackLightColor']);
  ccm['logoBackColor'] = '#FFFFFF';

  if (ccm['textBackLightColor'] == '#9E9E9E') {
    ccm['textBackLightColor'] = '#424242';
  }

  sirius.adsettings.setupRicherTextAdsClick(adData, true);
  var pickedSpec = isSmallSizeAd(adData) ? smallSizeSpec : spec;
  renderAd(adData, pickedSpec, function() {decorateLayout(adData);});
}

function decorateLayout(adData) {
  var adContent = document.getElementById('adContent');
  var variation = adContent.getAttribute('data-variation');
  var headline = document.getElementById('headline');
  var url = document.getElementById('display-url');
  var description = document.getElementById('description');

  if (variation == 'banner_small') {
    description.style.color = headline.style.color;
    url.style.color = headline.style.color;
  }
}

