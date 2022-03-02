import {createGlobalStyle} from "styled-components";
import {Colors} from "./shared/styles/colors";
import flag from "./files/flags.png";
import flag2 from "./files/flags@2x.png";

const GlobalStyle = createGlobalStyle`

html{scroll-behavior:smooth; height: 100%;}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", "Roboto", sans-serif;
}

body{ background: ${Colors.body}; }
a{ text-decoration: none; }

.nav-icon{
    margin-right: 5px;
}

.leaflet-container{
    width: 100%;
    height: 100%;
}

.calendarCarReview {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

@charset "UTF-8";
.intl-tel-input {
  position: relative;
  display: inline-block;
}
.intl-tel-input * {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.intl-tel-input .hide {
  display: none;
}
.intl-tel-input .v-hide {
  visibility: hidden;
}
.intl-tel-input input, .intl-tel-input input[type=text], .intl-tel-input input[type=tel] {
  position: relative;
  z-index: 0;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-right: 36px;
  margin-right: 0;
}
.intl-tel-input .flag-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 1px;
}
.intl-tel-input .flag-container .arrow {
  font-size: 6px;
  margin-left: 5px;
}
.intl-tel-input .flag-container .arrow.up:after {
  content: "▲";
}
.intl-tel-input .flag-container .arrow.down:after {
  content: "▼";
}
.intl-tel-input .selected-flag {
  z-index: 1;
  position: relative;
  width: 36px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intl-tel-input .country-list {
  position: absolute;
  z-index: 2;
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0 0 0 -1px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
  border: 1px solid #CCC;
  white-space: nowrap;
  max-height: 200px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.intl-tel-input .country-list .divider {
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #CCC;
}
.intl-tel-input .country-list.dropup {
  bottom: 100%;
  margin-bottom: -1px;
}
.intl-tel-input .country-list .flag-box {
  display: inline-block;
  width: 20px;
}
@media (max-width: 500px) {
  .intl-tel-input .country-list {
    white-space: normal;
  }
}
.intl-tel-input .country-list .country {
  padding: 5px 10px;
}
.intl-tel-input .country-list .country .dial-code {
  color: #999;
}
.intl-tel-input .country-list .country.highlight {
  background-color: rgba(0, 0, 0, 0.05);
}
.intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name, .intl-tel-input .country-list .dial-code {
  vertical-align: middle;
}
.intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name {
  margin-right: 6px;
}
.intl-tel-input.allow-dropdown input, .intl-tel-input.allow-dropdown input[type=text], .intl-tel-input.allow-dropdown input[type=tel] {
  padding-right: 6px;
  padding-left: 52px;
  margin-left: 0;
}
.intl-tel-input.allow-dropdown .flag-container {
  right: auto;
  left: 0;
  width: 100%;
}
.intl-tel-input.allow-dropdown .selected-flag {
  width: 46px;
}
.intl-tel-input.allow-dropdown .flag-container:hover {
  cursor: pointer;
}
.intl-tel-input.allow-dropdown .flag-container:hover .selected-flag {
  background-color: rgba(0, 0, 0, 0.05);
}
.intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover {
  cursor: default;
}
.intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover .selected-flag, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover .selected-flag {
  background-color: transparent;
}
.intl-tel-input.allow-dropdown.separate-dial-code .selected-flag {
  background-color: rgba(0, 0, 0, 0.05);
  display: table;
}
.intl-tel-input.allow-dropdown.separate-dial-code .selected-dial-code {
  display: table-cell;
  vertical-align: middle;
  padding-left: 28px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 input, .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 input[type=text], .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 input[type=tel] {
  padding-left: 76px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .selected-flag {
  width: 70px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-3 input, .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-3 input[type=text], .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-3 input[type=tel] {
  padding-left: 84px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-3 .selected-flag {
  width: 78px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-4 input, .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-4 input[type=text], .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-4 input[type=tel] {
  padding-left: 92px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-4 .selected-flag {
  width: 86px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-5 input, .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-5 input[type=text], .intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-5 input[type=tel] {
  padding-left: 100px;
}
.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-5 .selected-flag {
  width: 94px;
}
.intl-tel-input.iti-container {
  position: absolute;
  top: -1000px;
  left: -1000px;
  z-index: 1060;
  padding: 1px;
}
.intl-tel-input.iti-container:hover {
  cursor: pointer;
}

.iti-mobile .intl-tel-input.iti-container {
  top: 30px;
  bottom: 30px;
  left: 30px;
  right: 30px;
  position: fixed;
}
.iti-mobile .intl-tel-input .country-list {
  max-height: 100%;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
.iti-mobile .intl-tel-input .country-list .country {
  padding: 10px 10px;
  line-height: 1.5em;
}

.iti-flag {
  width: 20px;
}
.iti-flag.be {
  width: 18px;
}
.iti-flag.ch {
  width: 15px;
}
.iti-flag.mc {
  width: 19px;
}
.iti-flag.ne {
  width: 18px;
}
.iti-flag.np {
  width: 13px;
}
.iti-flag.va {
  width: 15px;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {
  .iti-flag {
    background-size: 5630px 15px;
  }
}
.iti-flag.ac {
  height: 10px;
  background-position: 0px 0px;
}
.iti-flag.ad {
  height: 14px;
  background-position: -22px 0px;
}
.iti-flag.ae {
  height: 10px;
  background-position: -44px 0px;
}
.iti-flag.af {
  height: 14px;
  background-position: -66px 0px;
}
.iti-flag.ag {
  height: 14px;
  background-position: -88px 0px;
}
.iti-flag.ai {
  height: 10px;
  background-position: -110px 0px;
}
.iti-flag.al {
  height: 15px;
  background-position: -132px 0px;
}
.iti-flag.am {
  height: 10px;
  background-position: -154px 0px;
}
.iti-flag.ao {
  height: 14px;
  background-position: -176px 0px;
}
.iti-flag.aq {
  height: 14px;
  background-position: -198px 0px;
}
.iti-flag.ar {
  height: 13px;
  background-position: -220px 0px;
}
.iti-flag.as {
  height: 10px;
  background-position: -242px 0px;
}
.iti-flag.at {
  height: 14px;
  background-position: -264px 0px;
}
.iti-flag.au {
  height: 10px;
  background-position: -286px 0px;
}
.iti-flag.aw {
  height: 14px;
  background-position: -308px 0px;
}
.iti-flag.ax {
  height: 13px;
  background-position: -330px 0px;
}
.iti-flag.az {
  height: 10px;
  background-position: -352px 0px;
}
.iti-flag.ba {
  height: 10px;
  background-position: -374px 0px;
}
.iti-flag.bb {
  height: 14px;
  background-position: -396px 0px;
}
.iti-flag.bd {
  height: 12px;
  background-position: -418px 0px;
}
.iti-flag.be {
  height: 15px;
  background-position: -440px 0px;
}
.iti-flag.bf {
  height: 14px;
  background-position: -460px 0px;
}
.iti-flag.bg {
  height: 12px;
  background-position: -482px 0px;
}
.iti-flag.bh {
  height: 12px;
  background-position: -504px 0px;
}
.iti-flag.bi {
  height: 12px;
  background-position: -526px 0px;
}
.iti-flag.bj {
  height: 14px;
  background-position: -548px 0px;
}
.iti-flag.bl {
  height: 14px;
  background-position: -570px 0px;
}
.iti-flag.bm {
  height: 10px;
  background-position: -592px 0px;
}
.iti-flag.bn {
  height: 10px;
  background-position: -614px 0px;
}
.iti-flag.bo {
  height: 14px;
  background-position: -636px 0px;
}
.iti-flag.bq {
  height: 14px;
  background-position: -658px 0px;
}
.iti-flag.br {
  height: 14px;
  background-position: -680px 0px;
}
.iti-flag.bs {
  height: 10px;
  background-position: -702px 0px;
}
.iti-flag.bt {
  height: 14px;
  background-position: -724px 0px;
}
.iti-flag.bv {
  height: 15px;
  background-position: -746px 0px;
}
.iti-flag.bw {
  height: 14px;
  background-position: -768px 0px;
}
.iti-flag.by {
  height: 10px;
  background-position: -790px 0px;
}
.iti-flag.bz {
  height: 14px;
  background-position: -812px 0px;
}
.iti-flag.ca {
  height: 10px;
  background-position: -834px 0px;
}
.iti-flag.cc {
  height: 10px;
  background-position: -856px 0px;
}
.iti-flag.cd {
  height: 15px;
  background-position: -878px 0px;
}
.iti-flag.cf {
  height: 14px;
  background-position: -900px 0px;
}
.iti-flag.cg {
  height: 14px;
  background-position: -922px 0px;
}
.iti-flag.ch {
  height: 15px;
  background-position: -944px 0px;
}
.iti-flag.ci {
  height: 14px;
  background-position: -961px 0px;
}
.iti-flag.ck {
  height: 10px;
  background-position: -983px 0px;
}
.iti-flag.cl {
  height: 14px;
  background-position: -1005px 0px;
}
.iti-flag.cm {
  height: 14px;
  background-position: -1027px 0px;
}
.iti-flag.cn {
  height: 14px;
  background-position: -1049px 0px;
}
.iti-flag.co {
  height: 14px;
  background-position: -1071px 0px;
}
.iti-flag.cp {
  height: 14px;
  background-position: -1093px 0px;
}
.iti-flag.cr {
  height: 12px;
  background-position: -1115px 0px;
}
.iti-flag.cu {
  height: 10px;
  background-position: -1137px 0px;
}
.iti-flag.cv {
  height: 12px;
  background-position: -1159px 0px;
}
.iti-flag.cw {
  height: 14px;
  background-position: -1181px 0px;
}
.iti-flag.cx {
  height: 10px;
  background-position: -1203px 0px;
}
.iti-flag.cy {
  height: 14px;
  background-position: -1225px 0px;
}
.iti-flag.cz {
  height: 14px;
  background-position: -1247px 0px;
}
.iti-flag.de {
  height: 12px;
  background-position: -1269px 0px;
}
.iti-flag.dg {
  height: 10px;
  background-position: -1291px 0px;
}
.iti-flag.dj {
  height: 14px;
  background-position: -1313px 0px;
}
.iti-flag.dk {
  height: 15px;
  background-position: -1335px 0px;
}
.iti-flag.dm {
  height: 10px;
  background-position: -1357px 0px;
}
.iti-flag.do {
  height: 13px;
  background-position: -1379px 0px;
}
.iti-flag.dz {
  height: 14px;
  background-position: -1401px 0px;
}
.iti-flag.ea {
  height: 14px;
  background-position: -1423px 0px;
}
.iti-flag.ec {
  height: 14px;
  background-position: -1445px 0px;
}
.iti-flag.ee {
  height: 13px;
  background-position: -1467px 0px;
}
.iti-flag.eg {
  height: 14px;
  background-position: -1489px 0px;
}
.iti-flag.eh {
  height: 10px;
  background-position: -1511px 0px;
}
.iti-flag.er {
  height: 10px;
  background-position: -1533px 0px;
}
.iti-flag.es {
  height: 14px;
  background-position: -1555px 0px;
}
.iti-flag.et {
  height: 10px;
  background-position: -1577px 0px;
}
.iti-flag.eu {
  height: 14px;
  background-position: -1599px 0px;
}
.iti-flag.fi {
  height: 12px;
  background-position: -1621px 0px;
}
.iti-flag.fj {
  height: 10px;
  background-position: -1643px 0px;
}
.iti-flag.fk {
  height: 10px;
  background-position: -1665px 0px;
}
.iti-flag.fm {
  height: 11px;
  background-position: -1687px 0px;
}
.iti-flag.fo {
  height: 15px;
  background-position: -1709px 0px;
}
.iti-flag.fr {
  height: 14px;
  background-position: -1731px 0px;
}
.iti-flag.ga {
  height: 15px;
  background-position: -1753px 0px;
}
.iti-flag.gb {
  height: 10px;
  background-position: -1775px 0px;
}
.iti-flag.gd {
  height: 12px;
  background-position: -1797px 0px;
}
.iti-flag.ge {
  height: 14px;
  background-position: -1819px 0px;
}
.iti-flag.gf {
  height: 14px;
  background-position: -1841px 0px;
}
.iti-flag.gg {
  height: 14px;
  background-position: -1863px 0px;
}
.iti-flag.gh {
  height: 14px;
  background-position: -1885px 0px;
}
.iti-flag.gi {
  height: 10px;
  background-position: -1907px 0px;
}
.iti-flag.gl {
  height: 14px;
  background-position: -1929px 0px;
}
.iti-flag.gm {
  height: 14px;
  background-position: -1951px 0px;
}
.iti-flag.gn {
  height: 14px;
  background-position: -1973px 0px;
}
.iti-flag.gp {
  height: 14px;
  background-position: -1995px 0px;
}
.iti-flag.gq {
  height: 14px;
  background-position: -2017px 0px;
}
.iti-flag.gr {
  height: 14px;
  background-position: -2039px 0px;
}
.iti-flag.gs {
  height: 10px;
  background-position: -2061px 0px;
}
.iti-flag.gt {
  height: 13px;
  background-position: -2083px 0px;
}
.iti-flag.gu {
  height: 11px;
  background-position: -2105px 0px;
}
.iti-flag.gw {
  height: 10px;
  background-position: -2127px 0px;
}
.iti-flag.gy {
  height: 12px;
  background-position: -2149px 0px;
}
.iti-flag.hk {
  height: 14px;
  background-position: -2171px 0px;
}
.iti-flag.hm {
  height: 10px;
  background-position: -2193px 0px;
}
.iti-flag.hn {
  height: 10px;
  background-position: -2215px 0px;
}
.iti-flag.hr {
  height: 10px;
  background-position: -2237px 0px;
}
.iti-flag.ht {
  height: 12px;
  background-position: -2259px 0px;
}
.iti-flag.hu {
  height: 10px;
  background-position: -2281px 0px;
}
.iti-flag.ic {
  height: 14px;
  background-position: -2303px 0px;
}
.iti-flag.id {
  height: 14px;
  background-position: -2325px 0px;
}
.iti-flag.ie {
  height: 10px;
  background-position: -2347px 0px;
}
.iti-flag.il {
  height: 15px;
  background-position: -2369px 0px;
}
.iti-flag.im {
  height: 10px;
  background-position: -2391px 0px;
}
.iti-flag.in {
  height: 14px;
  background-position: -2413px 0px;
}
.iti-flag.io {
  height: 10px;
  background-position: -2435px 0px;
}
.iti-flag.iq {
  height: 14px;
  background-position: -2457px 0px;
}
.iti-flag.ir {
  height: 12px;
  background-position: -2479px 0px;
}
.iti-flag.is {
  height: 15px;
  background-position: -2501px 0px;
}
.iti-flag.it {
  height: 14px;
  background-position: -2523px 0px;
}
.iti-flag.je {
  height: 12px;
  background-position: -2545px 0px;
}
.iti-flag.jm {
  height: 10px;
  background-position: -2567px 0px;
}
.iti-flag.jo {
  height: 10px;
  background-position: -2589px 0px;
}
.iti-flag.jp {
  height: 14px;
  background-position: -2611px 0px;
}
.iti-flag.ke {
  height: 14px;
  background-position: -2633px 0px;
}
.iti-flag.kg {
  height: 12px;
  background-position: -2655px 0px;
}
.iti-flag.kh {
  height: 13px;
  background-position: -2677px 0px;
}
.iti-flag.ki {
  height: 10px;
  background-position: -2699px 0px;
}
.iti-flag.km {
  height: 12px;
  background-position: -2721px 0px;
}
.iti-flag.kn {
  height: 14px;
  background-position: -2743px 0px;
}
.iti-flag.kp {
  height: 10px;
  background-position: -2765px 0px;
}
.iti-flag.kr {
  height: 14px;
  background-position: -2787px 0px;
}
.iti-flag.kw {
  height: 10px;
  background-position: -2809px 0px;
}
.iti-flag.ky {
  height: 10px;
  background-position: -2831px 0px;
}
.iti-flag.kz {
  height: 10px;
  background-position: -2853px 0px;
}
.iti-flag.la {
  height: 14px;
  background-position: -2875px 0px;
}
.iti-flag.lb {
  height: 14px;
  background-position: -2897px 0px;
}
.iti-flag.lc {
  height: 10px;
  background-position: -2919px 0px;
}
.iti-flag.li {
  height: 12px;
  background-position: -2941px 0px;
}
.iti-flag.lk {
  height: 10px;
  background-position: -2963px 0px;
}
.iti-flag.lr {
  height: 11px;
  background-position: -2985px 0px;
}
.iti-flag.ls {
  height: 14px;
  background-position: -3007px 0px;
}
.iti-flag.lt {
  height: 12px;
  background-position: -3029px 0px;
}
.iti-flag.lu {
  height: 12px;
  background-position: -3051px 0px;
}
.iti-flag.lv {
  height: 10px;
  background-position: -3073px 0px;
}
.iti-flag.ly {
  height: 10px;
  background-position: -3095px 0px;
}
.iti-flag.ma {
  height: 14px;
  background-position: -3117px 0px;
}
.iti-flag.mc {
  height: 15px;
  background-position: -3139px 0px;
}
.iti-flag.md {
  height: 10px;
  background-position: -3160px 0px;
}
.iti-flag.me {
  height: 10px;
  background-position: -3182px 0px;
}
.iti-flag.mf {
  height: 14px;
  background-position: -3204px 0px;
}
.iti-flag.mg {
  height: 14px;
  background-position: -3226px 0px;
}
.iti-flag.mh {
  height: 11px;
  background-position: -3248px 0px;
}
.iti-flag.mk {
  height: 10px;
  background-position: -3270px 0px;
}
.iti-flag.ml {
  height: 14px;
  background-position: -3292px 0px;
}
.iti-flag.mm {
  height: 14px;
  background-position: -3314px 0px;
}
.iti-flag.mn {
  height: 10px;
  background-position: -3336px 0px;
}
.iti-flag.mo {
  height: 14px;
  background-position: -3358px 0px;
}
.iti-flag.mp {
  height: 10px;
  background-position: -3380px 0px;
}
.iti-flag.mq {
  height: 14px;
  background-position: -3402px 0px;
}
.iti-flag.mr {
  height: 14px;
  background-position: -3424px 0px;
}
.iti-flag.ms {
  height: 10px;
  background-position: -3446px 0px;
}
.iti-flag.mt {
  height: 14px;
  background-position: -3468px 0px;
}
.iti-flag.mu {
  height: 14px;
  background-position: -3490px 0px;
}
.iti-flag.mv {
  height: 14px;
  background-position: -3512px 0px;
}
.iti-flag.mw {
  height: 14px;
  background-position: -3534px 0px;
}
.iti-flag.mx {
  height: 12px;
  background-position: -3556px 0px;
}
.iti-flag.my {
  height: 10px;
  background-position: -3578px 0px;
}
.iti-flag.mz {
  height: 14px;
  background-position: -3600px 0px;
}
.iti-flag.na {
  height: 14px;
  background-position: -3622px 0px;
}
.iti-flag.nc {
  height: 10px;
  background-position: -3644px 0px;
}
.iti-flag.ne {
  height: 15px;
  background-position: -3666px 0px;
}
.iti-flag.nf {
  height: 10px;
  background-position: -3686px 0px;
}
.iti-flag.ng {
  height: 10px;
  background-position: -3708px 0px;
}
.iti-flag.ni {
  height: 12px;
  background-position: -3730px 0px;
}
.iti-flag.nl {
  height: 14px;
  background-position: -3752px 0px;
}
.iti-flag.no {
  height: 15px;
  background-position: -3774px 0px;
}
.iti-flag.np {
  height: 15px;
  background-position: -3796px 0px;
}
.iti-flag.nr {
  height: 10px;
  background-position: -3811px 0px;
}
.iti-flag.nu {
  height: 10px;
  background-position: -3833px 0px;
}
.iti-flag.nz {
  height: 10px;
  background-position: -3855px 0px;
}
.iti-flag.om {
  height: 10px;
  background-position: -3877px 0px;
}
.iti-flag.pa {
  height: 14px;
  background-position: -3899px 0px;
}
.iti-flag.pe {
  height: 14px;
  background-position: -3921px 0px;
}
.iti-flag.pf {
  height: 14px;
  background-position: -3943px 0px;
}
.iti-flag.pg {
  height: 15px;
  background-position: -3965px 0px;
}
.iti-flag.ph {
  height: 10px;
  background-position: -3987px 0px;
}
.iti-flag.pk {
  height: 14px;
  background-position: -4009px 0px;
}
.iti-flag.pl {
  height: 13px;
  background-position: -4031px 0px;
}
.iti-flag.pm {
  height: 14px;
  background-position: -4053px 0px;
}
.iti-flag.pn {
  height: 10px;
  background-position: -4075px 0px;
}
.iti-flag.pr {
  height: 14px;
  background-position: -4097px 0px;
}
.iti-flag.ps {
  height: 10px;
  background-position: -4119px 0px;
}
.iti-flag.pt {
  height: 14px;
  background-position: -4141px 0px;
}
.iti-flag.pw {
  height: 13px;
  background-position: -4163px 0px;
}
.iti-flag.py {
  height: 11px;
  background-position: -4185px 0px;
}
.iti-flag.qa {
  height: 8px;
  background-position: -4207px 0px;
}
.iti-flag.re {
  height: 14px;
  background-position: -4229px 0px;
}
.iti-flag.ro {
  height: 14px;
  background-position: -4251px 0px;
}
.iti-flag.rs {
  height: 14px;
  background-position: -4273px 0px;
}
.iti-flag.ru {
  height: 14px;
  background-position: -4295px 0px;
}
.iti-flag.rw {
  height: 14px;
  background-position: -4317px 0px;
}
.iti-flag.sa {
  height: 14px;
  background-position: -4339px 0px;
}
.iti-flag.sb {
  height: 10px;
  background-position: -4361px 0px;
}
.iti-flag.sc {
  height: 10px;
  background-position: -4383px 0px;
}
.iti-flag.sd {
  height: 10px;
  background-position: -4405px 0px;
}
.iti-flag.se {
  height: 13px;
  background-position: -4427px 0px;
}
.iti-flag.sg {
  height: 14px;
  background-position: -4449px 0px;
}
.iti-flag.sh {
  height: 10px;
  background-position: -4471px 0px;
}
.iti-flag.si {
  height: 10px;
  background-position: -4493px 0px;
}
.iti-flag.sj {
  height: 15px;
  background-position: -4515px 0px;
}
.iti-flag.sk {
  height: 14px;
  background-position: -4537px 0px;
}
.iti-flag.sl {
  height: 14px;
  background-position: -4559px 0px;
}
.iti-flag.sm {
  height: 15px;
  background-position: -4581px 0px;
}
.iti-flag.sn {
  height: 14px;
  background-position: -4603px 0px;
}
.iti-flag.so {
  height: 14px;
  background-position: -4625px 0px;
}
.iti-flag.sr {
  height: 14px;
  background-position: -4647px 0px;
}
.iti-flag.ss {
  height: 10px;
  background-position: -4669px 0px;
}
.iti-flag.st {
  height: 10px;
  background-position: -4691px 0px;
}
.iti-flag.sv {
  height: 12px;
  background-position: -4713px 0px;
}
.iti-flag.sx {
  height: 14px;
  background-position: -4735px 0px;
}
.iti-flag.sy {
  height: 14px;
  background-position: -4757px 0px;
}
.iti-flag.sz {
  height: 14px;
  background-position: -4779px 0px;
}
.iti-flag.ta {
  height: 10px;
  background-position: -4801px 0px;
}
.iti-flag.tc {
  height: 10px;
  background-position: -4823px 0px;
}
.iti-flag.td {
  height: 14px;
  background-position: -4845px 0px;
}
.iti-flag.tf {
  height: 14px;
  background-position: -4867px 0px;
}
.iti-flag.tg {
  height: 13px;
  background-position: -4889px 0px;
}
.iti-flag.th {
  height: 14px;
  background-position: -4911px 0px;
}
.iti-flag.tj {
  height: 10px;
  background-position: -4933px 0px;
}
.iti-flag.tk {
  height: 10px;
  background-position: -4955px 0px;
}
.iti-flag.tl {
  height: 10px;
  background-position: -4977px 0px;
}
.iti-flag.tm {
  height: 14px;
  background-position: -4999px 0px;
}
.iti-flag.tn {
  height: 14px;
  background-position: -5021px 0px;
}
.iti-flag.to {
  height: 10px;
  background-position: -5043px 0px;
}
.iti-flag.tr {
  height: 14px;
  background-position: -5065px 0px;
}
.iti-flag.tt {
  height: 12px;
  background-position: -5087px 0px;
}
.iti-flag.tv {
  height: 10px;
  background-position: -5109px 0px;
}
.iti-flag.tw {
  height: 14px;
  background-position: -5131px 0px;
}
.iti-flag.tz {
  height: 14px;
  background-position: -5153px 0px;
}
.iti-flag.ua {
  height: 14px;
  background-position: -5175px 0px;
}
.iti-flag.ug {
  height: 14px;
  background-position: -5197px 0px;
}
.iti-flag.um {
  height: 11px;
  background-position: -5219px 0px;
}
.iti-flag.us {
  height: 11px;
  background-position: -5241px 0px;
}
.iti-flag.uy {
  height: 14px;
  background-position: -5263px 0px;
}
.iti-flag.uz {
  height: 10px;
  background-position: -5285px 0px;
}
.iti-flag.va {
  height: 15px;
  background-position: -5307px 0px;
}
.iti-flag.vc {
  height: 14px;
  background-position: -5324px 0px;
}
.iti-flag.ve {
  height: 14px;
  background-position: -5346px 0px;
}
.iti-flag.vg {
  height: 10px;
  background-position: -5368px 0px;
}
.iti-flag.vi {
  height: 14px;
  background-position: -5390px 0px;
}
.iti-flag.vn {
  height: 14px;
  background-position: -5412px 0px;
}
.iti-flag.vu {
  height: 12px;
  background-position: -5434px 0px;
}
.iti-flag.wf {
  height: 14px;
  background-position: -5456px 0px;
}
.iti-flag.ws {
  height: 10px;
  background-position: -5478px 0px;
}
.iti-flag.xk {
  height: 15px;
  background-position: -5500px 0px;
}
.iti-flag.ye {
  height: 14px;
  background-position: -5522px 0px;
}
.iti-flag.yt {
  height: 14px;
  background-position: -5544px 0px;
}
.iti-flag.za {
  height: 14px;
  background-position: -5566px 0px;
}
.iti-flag.zm {
  height: 14px;
  background-position: -5588px 0px;
}
.iti-flag.zw {
  height: 10px;
  background-position: -5610px 0px;
}

.iti-flag {
  width: 20px;
  height: 15px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: url(flag);
  background-repeat: no-repeat;
  background-color: #DBDBDB;
  background-position: 20px 0;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {
  .iti-flag {
    background-image: url("./flags@2x.png");
  }
}

.iti-flag.np {
  background-color: transparent;
}


.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
	position: absolute;
	left: 0;
	top: 0;
	}
.leaflet-container {
	overflow: hidden;
	}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	  -webkit-user-drag: none;
	}
/* Prevents IE11 from highlighting tiles in blue */
.leaflet-tile::selection {
	background: transparent;
}
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */
.leaflet-safari .leaflet-tile {
	image-rendering: -webkit-optimize-contrast;
	}
/* hack that prevents hw layers "stretching" when loading new tiles */
.leaflet-safari .leaflet-tile-container {
	width: 1600px;
	height: 1600px;
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
	}
.leaflet-marker-icon,
.leaflet-marker-shadow {
	display: block;
	}
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg,
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
	max-width: none !important;
	max-height: none !important;
	}

.leaflet-container.leaflet-touch-zoom {
	-ms-touch-action: pan-x pan-y;
	touch-action: pan-x pan-y;
	}
.leaflet-container.leaflet-touch-drag {
	-ms-touch-action: pinch-zoom;
	/* Fallback for FF which doesn't support pinch-zoom */
	touch-action: none;
	touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
	-ms-touch-action: none;
	touch-action: none;
}
.leaflet-container {
	-webkit-tap-highlight-color: transparent;
}
.leaflet-container a {
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-tile {
	filter: inherit;
	visibility: hidden;
	}
.leaflet-tile-loaded {
	visibility: inherit;
	}
.leaflet-zoom-box {
	width: 0;
	height: 0;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;
	z-index: 800;
	}
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
	user-select: none;
	-moz-user-select: none;
	}

.leaflet-pane         { z-index: 400; }

.leaflet-tile-pane    { z-index: 200; }
.leaflet-overlay-pane { z-index: 400; }
.leaflet-shadow-pane  { z-index: 500; }
.leaflet-marker-pane  { z-index: 600; }
.leaflet-tooltip-pane   { z-index: 650; }
.leaflet-popup-pane   { z-index: 700; }

.leaflet-map-pane canvas { z-index: 100; }
.leaflet-map-pane svg    { z-index: 200; }

.leaflet-vml-shape {
	width: 1px;
	height: 1px;
	}
.lvml {
	behavior: url(#default#VML);
	display: inline-block;
	position: absolute;
	}


/* control positioning */

.leaflet-control {
	position: relative;
	z-index: 800;
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}
.leaflet-top,
.leaflet-bottom {
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	}
.leaflet-top {
	top: 0;
	}
.leaflet-right {
	right: 0;
	}
.leaflet-bottom {
	bottom: 0;
	}
.leaflet-left {
	left: 0;
	}
.leaflet-control {
	float: left;
	clear: both;
	}
.leaflet-right .leaflet-control {
	float: right;
	}
.leaflet-top .leaflet-control {
	margin-top: 10px;
	}
.leaflet-bottom .leaflet-control {
	margin-bottom: 10px;
	}
.leaflet-left .leaflet-control {
	margin-left: 10px;
	}
.leaflet-right .leaflet-control {
	margin-right: 10px;
	}


/* zoom and fade animations */

.leaflet-fade-anim .leaflet-tile {
	will-change: opacity;
	}
.leaflet-fade-anim .leaflet-popup {
	opacity: 0;
	-webkit-transition: opacity 0.2s linear;
	   -moz-transition: opacity 0.2s linear;
	        transition: opacity 0.2s linear;
	}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
	opacity: 1;
	}
.leaflet-zoom-animated {
	-webkit-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	        transform-origin: 0 0;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	will-change: transform;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);
	}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
	-webkit-transition: none;
	   -moz-transition: none;
	        transition: none;
	}

.leaflet-zoom-anim .leaflet-zoom-hide {
	visibility: hidden;
	}


/* cursors */

.leaflet-interactive {
	cursor: pointer;
	}
.leaflet-grab {
	cursor: -webkit-grab;
	cursor:    -moz-grab;
	cursor:         grab;
	}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
	cursor: crosshair;
	}
.leaflet-popup-pane,
.leaflet-control {
	cursor: auto;
	}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
	cursor: move;
	cursor: -webkit-grabbing;
	cursor:    -moz-grabbing;
	cursor:         grabbing;
	}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
	pointer-events: none;
	}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}

/* visual tweaks */

.leaflet-container {
	background: #ddd;
	outline: 0;
	}
.leaflet-container a {
	color: #0078A8;
	}
.leaflet-container a.leaflet-active {
	outline: 2px solid orange;
	}
.leaflet-zoom-box {
	border: 2px dotted #38f;
	background: rgba(255,255,255,0.5);
	}


/* general typography */
.leaflet-container {
	font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
	}


/* general toolbar styles */

.leaflet-bar {
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);
	border-radius: 4px;
	}
.leaflet-bar a,
.leaflet-bar a:hover {
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	width: 26px;
	height: 26px;
	line-height: 26px;
	display: block;
	text-align: center;
	text-decoration: none;
	color: black;
	}
.leaflet-bar a,
.leaflet-control-layers-toggle {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: block;
	}
.leaflet-bar a:hover {
	background-color: #f4f4f4;
	}
.leaflet-bar a:first-child {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	}
.leaflet-bar a:last-child {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom: none;
	}
.leaflet-bar a.leaflet-disabled {
	cursor: default;
	background-color: #f4f4f4;
	color: #bbb;
	}

.leaflet-touch .leaflet-bar a {
	width: 30px;
	height: 30px;
	line-height: 30px;
	}
.leaflet-touch .leaflet-bar a:first-child {
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
	}
.leaflet-touch .leaflet-bar a:last-child {
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	}

/* zoom control */

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
	font: bold 18px 'Lucida Console', Monaco, monospace;
	text-indent: 1px;
	}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {
	font-size: 22px;
	}


/* layers control */

.leaflet-control-layers {
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);
	background: #fff;
	border-radius: 5px;
	}
.leaflet-control-layers-toggle {
	/* background-image: url(images/layers.png); */
	background-image: url(files/layers.png);
	width: 36px;
	height: 36px;
	}
.leaflet-retina .leaflet-control-layers-toggle {
	background-image: url(images/layers-2x.png);
	background-size: 26px 26px;
	}
.leaflet-touch .leaflet-control-layers-toggle {
	width: 44px;
	height: 44px;
	}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
	display: none;
	}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
	display: block;
	position: relative;
	}
.leaflet-control-layers-expanded {
	padding: 6px 10px 6px 6px;
	color: #333;
	background: #fff;
	}
.leaflet-control-layers-scrollbar {
	overflow-y: scroll;
	overflow-x: hidden;
	padding-right: 5px;
	}
.leaflet-control-layers-selector {
	margin-top: 2px;
	position: relative;
	top: 1px;
	}
.leaflet-control-layers label {
	display: block;
	}
.leaflet-control-layers-separator {
	height: 0;
	border-top: 1px solid #ddd;
	margin: 5px -10px 5px -6px;
	}

/* Default icon URLs */
.leaflet-default-icon-path {
}


/* attribution and scale controls */

.leaflet-container .leaflet-control-attribution {
	background: #fff;
	background: rgba(255, 255, 255, 0.7);
	margin: 0;
	}
.leaflet-control-attribution,
.leaflet-control-scale-line {
	padding: 0 5px;
	color: #333;
	}
.leaflet-control-attribution a {
	text-decoration: none;
	}
.leaflet-control-attribution a:hover {
	text-decoration: underline;
	}
.leaflet-container .leaflet-control-attribution,
.leaflet-container .leaflet-control-scale {
	font-size: 11px;
	}
.leaflet-left .leaflet-control-scale {
	margin-left: 5px;
	}
.leaflet-bottom .leaflet-control-scale {
	margin-bottom: 5px;
	}
.leaflet-control-scale-line {
	border: 2px solid #777;
	border-top: none;
	line-height: 1.1;
	padding: 2px 5px 1px;
	font-size: 11px;
	white-space: nowrap;
	overflow: hidden;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;

	background: #fff;
	background: rgba(255, 255, 255, 0.5);
	}
.leaflet-control-scale-line:not(:first-child) {
	border-top: 2px solid #777;
	border-bottom: none;
	margin-top: -2px;
	}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
	border-bottom: 2px solid #777;
	}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	box-shadow: none;
	}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	border: 2px solid rgba(0,0,0,0.2);
	background-clip: padding-box;
	}


/* popup */

.leaflet-popup {
	position: absolute;
	text-align: center;
	margin-bottom: 20px;
	}
.leaflet-popup-content-wrapper {
	padding: 1px;
	text-align: left;
	border-radius: 12px;
	}
.leaflet-popup-content {
	margin: 13px 19px;
	line-height: 1.4;
	}
.leaflet-popup-content p {
	margin: 18px 0;
	}
.leaflet-popup-tip-container {
	width: 40px;
	height: 20px;
	position: absolute;
	left: 50%;
	margin-left: -20px;
	overflow: hidden;
	pointer-events: none;
	}
.leaflet-popup-tip {
	width: 17px;
	height: 17px;
	padding: 1px;

	margin: -10px auto 0;

	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	        transform: rotate(45deg);
	}
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
	background: white;
	color: #333;
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
.leaflet-container a.leaflet-popup-close-button {
	position: absolute;
	top: 0;
	right: 0;
	padding: 4px 4px 0 0;
	border: none;
	text-align: center;
	width: 18px;
	height: 14px;
	font: 16px/14px Tahoma, Verdana, sans-serif;
	color: #c3c3c3;
	text-decoration: none;
	font-weight: bold;
	background: transparent;
	}
.leaflet-container a.leaflet-popup-close-button:hover {
	color: #999;
	}
.leaflet-popup-scrolled {
	overflow: auto;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	}

.leaflet-oldie .leaflet-popup-content-wrapper {
	-ms-zoom: 1;
	zoom: 1;
	}
.leaflet-oldie .leaflet-popup-tip {
	width: 24px;
	margin: 0 auto;

	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);
	}
.leaflet-oldie .leaflet-popup-tip-container {
	margin-top: -1px;
	}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
	border: 1px solid #999;
	}


/* div icon */

.leaflet-div-icon {
	background: #fff;
	border: 1px solid #666;
	}


/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
	position: absolute;
	padding: 6px;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 3px;
	color: #222;
	white-space: nowrap;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);
	}
.leaflet-tooltip.leaflet-clickable {
	cursor: pointer;
	pointer-events: auto;
	}
.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	position: absolute;
	pointer-events: none;
	border: 6px solid transparent;
	background: transparent;
	content: "";
	}

/* Directions */

.leaflet-tooltip-bottom {
	margin-top: 6px;
}
.leaflet-tooltip-top {
	margin-top: -6px;
}
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
	left: 50%;
	margin-left: -6px;
	}
.leaflet-tooltip-top:before {
	bottom: 0;
	margin-bottom: -12px;
	border-top-color: #fff;
	}
.leaflet-tooltip-bottom:before {
	top: 0;
	margin-top: -12px;
	margin-left: -6px;
	border-bottom-color: #fff;
	}
.leaflet-tooltip-left {
	margin-left: -6px;
}
.leaflet-tooltip-right {
	margin-left: 6px;
}
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	top: 50%;
	margin-top: -6px;
	}
.leaflet-tooltip-left:before {
	right: 0;
	margin-right: -12px;
	border-left-color: #fff;
	}
.leaflet-tooltip-right:before {
	left: 0;
	margin-left: -12px;
	border-right-color: #fff;
	}

`;

export default GlobalStyle;