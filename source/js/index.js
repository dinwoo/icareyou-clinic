let clinicData = [
  {
    area: "北區",
    name: "忠孝診所",
    BusinessHours: ["周一到周五 09:30-20:00", "周六 09:30-18:30"],
    phone: "(02)6630-9918",
    address: "台北市中正區忠孝西路一段50號27樓",
    LatLng: { lat: 25.0460604, lng: 121.516553 },
    imgIndex: 0,
    imgList: [
      "http://fakeimg.pl/215x135/ccc/000000/?text=img1",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img2",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img3",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img4",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img5",
    ],
    doctors: ["唐蓉里", "張益誠", "唐瑄伶", "陳眉穎", "陳炯瑜", "林凱信"],
  },
  {
    area: "北區",
    name: "板橋診所",
    BusinessHours: ["周一到周五 10:30-20:00", "周六 10:30-18:30"],
    phone: "(02)2964-7651",
    address: "新北市板橋區三民路二段35巷2號",
    LatLng: { lat: 25.0460604, lng: 121.516553 },
    imgIndex: 0,
    imgList: [
      "http://fakeimg.pl/215x135/ccc/000000/?text=img1",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img2",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img3",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img4",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img5",
    ],
    doctors: ["唐瑄伶"],
  },
  {
    area: "中區",
    name: "新竹診所",
    BusinessHours: ["周一到周五 10:30-20:00", "周六 10:30-18:30"],
    phone: "(03)526-3012",
    address: "新竹市水田街12號 1- 3樓",
    LatLng: { lat: 25.0460604, lng: 121.516553 },
    imgIndex: 0,
    imgList: [
      "http://fakeimg.pl/215x135/ccc/000000/?text=img1",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img2",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img3",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img4",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img5",
    ],
    doctors: ["唐瑄伶", "陳思帆"],
  },
  {
    area: "中區",
    name: "中港診所",
    BusinessHours: ["周一到周五 09:30-20:00", "周六 09:30-18:30"],
    phone: "(04)2326-9066",
    address: "台中市西區台灣大道二段300號5F",
    LatLng: { lat: 25.0460604, lng: 121.516553 },
    imgIndex: 0,
    imgList: [
      "http://fakeimg.pl/215x135/ccc/000000/?text=img1",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img2",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img3",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img4",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img5",
    ],
    doctors: ["唐瑄伶", "林凱信", "陳志衔", "張益誠", "陳炯瑜", "陳思帆"],
  },
  {
    area: "南區",
    name: "府城診所",
    BusinessHours: ["周一到周五 10:30-20:00", "周六 10:30-18:30"],
    phone: "(06)222-8998",
    address: "台南市南區夏林路63號",
    LatLng: { lat: 25.0460604, lng: 121.516553 },
    imgIndex: 0,
    imgList: [
      "http://fakeimg.pl/215x135/ccc/000000/?text=img1",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img2",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img3",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img4",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img5",
    ],
    doctors: ["楊友華", "陳炯瑜", "陳思帆", "張益誠", "孫一峯", "陳志衔"],
  },
  {
    area: "南區",
    name: "明誠診所",
    BusinessHours: ["周一到周五 09:30-20:00", "周六 09:30-18:30"],
    phone: "(07)342-8181",
    address: "高雄市三民區明誠一路528號",
    LatLng: { lat: 25.0460604, lng: 121.516553 },
    imgIndex: 0,
    imgList: [
      "http://fakeimg.pl/215x135/ccc/000000/?text=img1",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img2",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img3",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img4",
      "http://fakeimg.pl/215x135/ccc/000000/?text=img5",
    ],
    doctors: [],
  },
];

Vue.component("clinicItem", {
  template: `
    <h1> {{ clinicData }} </h1>
  `,
  props: ["clinicData"],
  data() {
    return {};
  },
});

const app = new Vue({
  data() {
    return {
      clinicData: clinicData,
      areaList: ["北區", "中區", "南區"],
      areaSelected: "",
      doctorSelected: "",
      nowPosition: { lat: null, lng: null },
    };
  },
  computed: {
    doctorList() {
      let doctorArr = [];
      this.clinicData.forEach(function (clinic, index) {
        clinic.doctors.forEach(function (doctor) {
          if (
            !doctorArr.some(function (doctorName) {
              return doctorName == doctor;
            })
          ) {
            doctorArr.push(doctor);
          }
        });
      });
      return doctorArr;
    },
    clinicList() {
      let _this = this;
      return this.clinicData.filter(function (clinic) {
        return (
          (clinic.area == _this.areaSelected || _this.areaSelected == "") &&
          (clinic.doctors.some(function (doctor) {
            return doctor == _this.doctorSelected;
          }) ||
            _this.doctorSelected == "")
        );
      });
    },
  },
  created() {
    let _this = this;
    if (navigator.geolocation) {
      // 執行要權限的function
      navigator.geolocation.getCurrentPosition(function (position) {
        _this.nowPosition.lat = position.coords.latitude;
        _this.nowPosition.lng = position.coords.longitude;
      });

      let origin1 = new google.maps.LatLng(55.930385, -3.118425);
      let destinationA = new google.maps.LatLng(50.087692, 14.42115);

      let service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin1],
          destinations: [destinationA],
          travelMode: "DRIVING",
        },
        _this.googlemap
      );
    } else {
      alert("Sorry, 你的裝置不支援地理位置功能。");
    }
  },
  mounted() {},
  methods: {
    googlemap(response, status) {
      console.log(response, status);
    },
  },
});

app.$mount("#app");
