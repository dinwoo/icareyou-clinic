"use strict";

var clinicData = [// 診所資料開始----------------------------------------------------------------------------
{
  area: "北區",
  name: "忠孝診所",
  BusinessHours: ["周一到周五 09:30-20:00", "周六 09:30-18:30"],
  phone: "(02)6630-9918",
  address: "台北市中正區忠孝西路一段50號27樓",
  imgIndex: 0,
  imgList: ["https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic1-1-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic1-2-scaled.jpeg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic1-3-scaled.jpeg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic1-4-scaled.jpeg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic1-5-scaled.jpg"],
  doctors: ["唐蓉里", "張益誠", "唐瑄伶", "陳眉穎", "陳炯瑜", "林凱信"]
}, // 診所資料結束----------------------------------------------------------------------------
// 診所資料開始----------------------------------------------------------------------------
{
  area: "北區",
  name: "板橋診所",
  BusinessHours: ["周一到周五 10:30-20:00", "周六 10:30-18:30"],
  phone: "(02)2964-7651",
  address: "新北市板橋區三民路二段35巷2號",
  imgIndex: 0,
  imgList: ["https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic2-1-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic2-2-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic2-3-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic2-4-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic2-5-scaled.jpg"],
  doctors: ["唐瑄伶"]
}, // 診所資料結束----------------------------------------------------------------------------
// 診所資料開始----------------------------------------------------------------------------
{
  area: "中區",
  name: "新竹診所",
  BusinessHours: ["周一到周五 10:30-20:00", "周六 10:30-18:30"],
  phone: "(03)526-3012",
  address: "新竹市水田街12號 1- 3樓",
  imgIndex: 0,
  imgList: ["https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic3-1-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic3-2-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic3-3-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic3-4-scaled.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic3-5.jpg"],
  doctors: ["唐瑄伶", "陳思帆"]
}, // 診所資料結束----------------------------------------------------------------------------
// 診所資料開始----------------------------------------------------------------------------
{
  area: "中區",
  name: "中港診所",
  BusinessHours: ["周一到周五 09:30-20:00", "周六 09:30-18:30"],
  phone: "(04)2326-9066",
  address: "台中市西區台灣大道二段300號5F",
  imgIndex: 0,
  imgList: ["https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic4-1.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic4-2.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic4-3.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic4-4.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic4-5.jpg"],
  doctors: ["唐瑄伶", "林凱信", "陳志衔", "張益誠", "陳炯瑜", "陳思帆"]
}, // 診所資料結束----------------------------------------------------------------------------
// 診所資料開始----------------------------------------------------------------------------
{
  area: "南區",
  name: "府城診所",
  BusinessHours: ["周一到周五 10:30-20:00", "周六 10:30-18:30"],
  phone: "(06)222-8998",
  address: "台南市南區夏林路63號",
  imgIndex: 0,
  imgList: ["http://fakeimg.pl/215x135/ccc/000000/?text=clinic1", "http://fakeimg.pl/215x135/ccc/000000/?text=clinic2", "http://fakeimg.pl/215x135/ccc/000000/?text=clinic3", "http://fakeimg.pl/215x135/ccc/000000/?text=clinic4", "http://fakeimg.pl/215x135/ccc/000000/?text=clinic5"],
  doctors: ["楊友華", "陳炯瑜", "陳思帆", "張益誠", "孫一峯", "陳志衔"]
}, // 診所資料結束----------------------------------------------------------------------------
// 診所資料開始----------------------------------------------------------------------------
{
  area: "南區",
  name: "明誠診所",
  BusinessHours: ["周一到周五 09:30-20:00", "周六 09:30-18:30"],
  phone: "(07)342-8181",
  address: "高雄市三民區明誠一路528號",
  imgIndex: 0,
  imgList: ["https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic6-1.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic6-2.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic6-3.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic6-4.jpg", "https://www.icareyou.com.tw/wp-content/uploads/2021/10/clinic6-5.jpg"],
  doctors: []
} // 診所資料結束----------------------------------------------------------------------------
];
var app = new Vue({
  data: function data() {
    return {
      clinicData: clinicData,
      areaList: ["北區", "中區", "南區"],
      areaSelected: "",
      doctorSelected: "",
      showNear: false,
      nearClinic: {}
    };
  },
  computed: {
    doctorList: function doctorList() {
      var doctorArr = [];
      this.clinicData.forEach(function (clinic, index) {
        clinic.doctors.forEach(function (doctor) {
          if (!doctorArr.some(function (doctorName) {
            return doctorName == doctor;
          })) {
            doctorArr.push(doctor);
          }
        });
      });
      return doctorArr;
    },
    clinicList: function clinicList() {
      var _this = this;

      return this.clinicData.filter(function (clinic) {
        return (clinic.area == _this.areaSelected || _this.areaSelected == "") && (clinic.doctors.some(function (doctor) {
          return doctor == _this.doctorSelected;
        }) || _this.doctorSelected == "");
      });
    }
  },
  created: function created() {
    var _this = this;

    if (navigator.geolocation) {
      var originPosition; // 執行要權限的function

      navigator.geolocation.getCurrentPosition(function (position) {
        var originPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var destinationArr = _this.clinicData.map(function (clinic) {
          return clinic.address;
        });

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
          origins: [originPosition],
          destinations: destinationArr,
          travelMode: "DRIVING"
        }, _this.googlemap);
      });
    } else {
      alert("Sorry, 你的裝置不支援地理位置功能。");
    }
  },
  mounted: function mounted() {},
  methods: {
    googlemap: function googlemap(response, status) {
      this.clinicData.forEach(function (clinic, index) {
        clinic.distance = response.rows[0].elements[index].distance.value;
      });
      var tempList = JSON.parse(JSON.stringify(this.clinicData));
      tempList = tempList.sort(function (a, b) {
        return a.distance > b.distance ? 1 : -1;
      });
      this.nearClinic = tempList[0];
      this.showNear = true;
    }
  }
}); // Vue.component("clinicItem", {
//   template: `
//     <div class="clinic-item">${clinicTest}
//     </div>
//   `,
//   props: ["clinic-test"],
//   data() {
//     return {};
//   },
// });

app.$mount("#clinic-app");
//# sourceMappingURL=all.js.map
