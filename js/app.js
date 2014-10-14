angular.module('colorApp', ['ui.bootstrap'])
  .controller('mainCtrl', function($scope){
      $scope.radioModel = 0;

      $scope.colors = {
        1: {
            title: 'Pink & Reds',
            colorArray: [
              ['MistyRose.', '#FFE4E1', 'rgb(255,228,225)'],
              ['LightPink','#FFB6C1', 'rgb(255,182,193)'],
              ['Pink','#FFC0CB', 'rgb(255,192,203)'],
              ['Hotpink', '#FF69B4', 'rgb(255,105,180)'],
              ['DeepPink', '#FF1493','rgb(255,20,147)'],
              ['MediumVioletRed', '#C71585','rgb(199,21,133)'],
              ['PaleVioletRed', '#DB7093','rgb(219,112,147)'],
              ['Red', '#FF0000','rgb(255,0,0)'],
              ['Crimson', '#DC143C','rgb(220,20,60)'],
              ['Maroon', '#800000','rgb(128,0,0)'],
              ['DarkRed', '#8B0000','rgb(139,0,0)'],
              ['Brown', '#A52A2A','rgb(165,42,42)'],
              ['Firebrick', '#B22222','rgb(178,34,34)'],
              ['IndianRed', '#CD5C5C','rgb(205,92,92)'],
              ['LightCoral', '#F08080','rgb(240,128,128)'],
              ['Salmon', '#FA8072','rgb(250,128,114)'],
              ['Tomato', '#FF6347','rgb(255,99,71)'],
              ['Coral', '#FF7F50','rgb(255,127,80)'],
              ['DarkSalmon', '#E9967A','rgb(233,150,122)'],
              ['LightSalmon', '#FFA07A','rgb(255,160,122)'],
              ['PeachPuff', '#FFDAB9','rgb(255,218,185)']
            ]
        },
        2: {
            title: 'Oranges & Yellows',
            colorArray: [
              ['OrangeRed','#FF4500', 'rgb(255,69,0)'],
              ['DarkOrange','#FF8C00', 'rgb(255,140,0)'],
              ['Orange','#FF8C00', 'rgb(255,165,0)'],
              ['DarkGoldenrod', '#B8860B', 'rgb(184,134,11)'],
              ['Goldenrod', '#DAA520', 'rgb(218,165,32)'],
              ['Khaki', '#F0E68C', 'rgb(240,230,140)'],
              ['PaleGoldenrod', '#EEE8AA','rgb(238,232,170)'],
              ['LightGoldenrodYellow', '#FAFAD2','rgb(250,250,210)'],
              ['SandyBrown', '#F4A460','rgb(244,164,96)'],
              ['NavajoWhite', '#FFDEAD','rgb(255,222,173)'],
              ['Moccasin', '#FFE4B5','rgb(255,228,181)'],
              ['LemonChiffon', '#FFFACD','rgb(255,250,205)'],
              ['LightYellow', '#FFFFE0','rgb(255,255,224)'],
              ['Yellow', '#FFFF00','rgb(255,255,0)'],
              ['Gold', '#FFD700','rgb(255,215,0)']
            ]
        },
        3: {
            title: 'Greens',
            colorArray: [
              ['GreenYellow','#ADFF2F', 'rgb(173, 255, 47)' ],
              ['Chartreuse','#7FFF00', 'rgb(127,255,0)'],
              ['LawnGreen','#7CFC00', 'rgb(124,252,0)'],
              ['Lime','#00FF00','rgb(0,255,0)'],
              ['LimeGreen','#32CD32','rgb(50,205,50)'],
              ['MediumSeaGreen','#3CB371','rgb(60,179,113)'],
              ['SeaGreen','#2E8B57','rgb(46,139,87)'],
              ['DarkGreen','#006400','rgb(0,100,0)'],
              ['Green','#008000','rgb(0,128,0)'],
              ['ForestGreen','#228B22','rgb(34,139,34)'],
              ['OliveDrab', '#6B8E23','rgb(107,142,35)'],
              ['DarkOliveGreen','#556B2F','rgb(85,107,47)'],
              ['Olive','#808000','rgb(128,128,0)'],
              ['YellowGreen','#9ACD32','rgb(154,205,50)'],
              ['LightGreen','#90EE90','rgb(144,238,144)'],
              ['PaleGreen','#98FB98','rgb(152,251,152)'],
              ['SpringGreen','#00FF7F','rgb(0,255,127)'],
              ['MediumSpringGreen','#00FA9A','rgb(0,250,154)'],
              ['MintCream','#F5FFFA','rgb(245,255,250)'],
              ['Aquamarine','#7FFFD4','rgb(127,255,212)'],
              ['MediumAquaMarine','#66CDAA','rgb(102,205,170)'],
              ['DarkSeaGreen','#8FBC8F','rgb(143,188,143)'],
              ['Honeydew','#F0FFF0','rgb(240,255,240)'],
              ['DarkCyan','#008B8B','rgb(0,139,139)'],
              ['Teal','#008080','rgb(0,128,128)'],
              ['LightSeaGreen','#20B2AA','rgb(32,178,170)']
            ]
        },
        4: {
            title: 'Blues',
            colorArray: [
              ['DarkCyan','#008B8B','rgb(0,139,139)'],
              ['DarkTurquoise','#00CED1','rgb(0,206,209)'],
              ['MediumTurquoise','#48D1CC','rgb(72,209,204)'],
              ['Turquoise','#40E0D0','rgb(64,224,208)'],
              ['Cyan','#00FFFF','rgb(0,255,255)'],
              ['Aqua','#00FFFF','rgb(0,255,255)'],
              ['LightCyan','#E0FFFF','rgb(224,255,255)'],
              ['Azure','#F0FFFF','rgb(240,255,255)'],
              ['AliceBlue','#F0F8FF','rgb(240,248,255)'],
              ['SkyBlue','#87CEEB','rgb(135,206,235)'],
              ['LightSkyBlue','#87CEFA','rgb(135,206,255)'],
              ['DeepSkyBlue','#00BFFF','rgb(0,191,255)'],
              ['DodgerBlue','#1E90FF','rgb(30,144,255)'],
              ['Blue','#0000FF','rgb(0,0,255)'],
              ['MediumBlue','#0000CD','rgb(0,0,205)'],
              ['DarkBlue','#00008B','rgb(0,0,139)'],
              ['Navy','#000080','rgb(0,0,128)'],
              ['MidnightBlue','#191970','rgb(25,25,112)'],
              ['RoyalBlue','#4169E1','rgb(65,105,255)'],
              ['CornflowerBlue','#6495ED','rgb(100,149,237)'],
              ['SteelBlue','#4682B4','rgb(70,130,180)'],
              ['DarkSlateGray','#2F4F4F','rgb(47,79,79)'],
              ['CadetBlue','#5F9EA0','rgb(95,158,160)'],
              ['LightBlue','#ADD8E6','rgb(173,216,230)'],
              ['PaleTurquoise','#AFEEEE','rgb(175,238,238)'],
              ['PowderBlue','#B0E0E6','rgb(176,224,230)'],
              ['LightSteelBlue','#B0C4DE','rgb(176,196,222)'],
              ['Lavander','#E6E6FA','rgb(230,230,250)'],
              ['MediumSlateBlue','#7B68EE','rgb(123,104,238)'],
              ['SlateBlue','#6A5ACD','rgb(106,90,205)']
            ]
        },
        5: {
            title: 'Purples & Violets',
            colorArray: [
              ['BlueViolet','#8A2BE2','rgb(138,43,226)'],
              ['DarkViolet','#9400D3','rgb(148,0,211)'],
              ['DarkOrchid','#9932CC','rgb(153,50,204)'],
              ['MediumOrchid','#BA55D3','rgb(186,85,211)'],
              ['Orchid','#DA70D6','rgb(218,112,214)'],
              ['Violet','#EE82EE','rgb(238,130,238)'],
              ['Fuchsia','#FF00FF','rgb(255,0,255)'],
              ['Magenta','#FF00FF','rgb(255,0,255)'],
              ['DarkMagenta','#8B008B','rgb(139,0,139)'],
              ['Purple','#800080','rgb(128,0,128)'],
              ['RebeccaPurple','#663399','rgb(102,51,153)'],
              ['Indigo','#4B0082','rgb(75,0,130)'],
              ['MediumPurple','#9370DB','rgb(147,112,219)'],
              ['Plum','#DDA0DD','rgb(221,160,221)'],
              ['Thistle','#D8BFD8','rgb(216,191,216)']
            ]
        },
        6: {
            title: 'Grays',
            colorArray: [
              ['Gainsboro','#DCDCDC','rgb(220,220,220)'],
              ['LightGray','#D3D3D3','rgb(211,211,211)'],
              ['Silver','#C0C0C0','rgb(192,192,192)'],
              ['DarkGray','#A9A9A9','rgb(169,169,169)'],
              ['Gray','#808080','rgb(128,128,128)'],
              ['DimGray','#696969','rgb(105,105,105)'],
              ['LightSlateGray','#778899','rgb(119,136,153)'],
              ['SlateGray','#708090','rgb(112,128,144)'],
              ['Black','#000000','rgb(0,0,0)']
            ]
        },
        7: {
            title: 'Whites & Beiges',
            colorArray: [
              ['GhostWhite','#F8F8FF','rgb(248,248,255)'],
              ['AntiqueWhite','#FAEBD7','rgb(250,235,215)'],
              ['Beige','#F5F5DC','rgb(245,245,220)'],
              ['Bisque','#FFE4C4','rgb(255,228,196)'],
              ['BlanchedAlmond','#FFEBCD','rgb(255,235,205)'],
              ['Ivory','#FFFFF0','rgb(255,255,240)'],
              ['Linen','#FAF0E6','rgb(250,240,230)'],
              ['OldLace','#FDF5E6','rgb(253,245,230)'],
              ['PapayaWhip','#FFEFD5','rgb(255,239,213)'],
              ['Seashell','#FFF5EE','rgb(255,245,238)'],
              ['Snow','#FFFAFA','rgb(255,250,250)'],
              ['LavenderBlush','#FFF0F5','rgb(255,240,245)'],
              ['White','#FFFFFF','rgb(255,255,255)'],
              ['WhiteSmoke','#F5F5F5','rgb(245,245,245)']
            ]
        },
        8: {
            title: 'Browns',
            colorArray: [
              ['Brown','#A52A2A','rgb(165,42,42)'],
              ['Chocolate','#D2691E','rgb(210,105,30)'],
              ['Peru','#CD853F','rgb(205,133,63)'],
              ['RosyBrown','#BC8F8F','rgb(188,143,143)'],
              ['SaddleBrown','#8B4513','rgb(139,69,19)'],
              ['DarkGoldenrod','#B8860B','rgb(184,134,11)'],
              ['Wheat','#F5DEB3','rgb(245,222,170)']
            ]
        }
      };



  });
