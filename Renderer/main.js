"use strict";

console.log("%cSchool At Midnight🌚","font-size: 3rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 15px");
console.log("%cReport any missed CSS or bugs to the github: https://github.com/CSSisAnnoying/school-at-midnight ","font-size: 1.5rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 15px")

let darkModeState = localStorage.getItem("darkModeState");

if (darkModeState === null) {
    darkModeState = "false";
    localStorage.setItem("darkModeState", "false");
}

let themeSwitcherContainer = document.querySelector(".Mtd4hb.QRiHXd");
let themeSwitcher = document.createElement("button");
themeSwitcher.setAttribute("class", "theme-switcher");
themeSwitcher.innerHTML = `
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg class="sun-icon theme-switcher-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
   <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
   <g id="SVGRepo_iconCarrier">
      <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
   </g>
</svg>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg class="moon-icon theme-switcher-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
   <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
   <g id="SVGRepo_iconCarrier">
      <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
   </g>
</svg>
`
themeSwitcherContainer.append(themeSwitcher);
themeSwitcherContainer.insertBefore(themeSwitcher, themeSwitcherContainer.querySelector(".fB7J9c.kWv2Xb.QRiHXd"))

let sunIcon = document.querySelector(".sun-icon");
let moonIcon = document.querySelector(".moon-icon");

let overlay = document.createElement("div");
overlay.setAttribute("class", "overlay");
document.body.append(overlay);

let darkModeStyleElement = document.createElement("style");
darkModeStyleElement.setAttribute("class","dark-mode");

darkModeStyleElement.innerHTML = 
`
body, nav, .joJglb, .ETRkCe {
    color: #fff;
    background-color: var(--background-dark);
}
.lXuxY .u73Apc {
    border-color: #373737;
}

a {
    color: var(--neon-blue);
}

*, h2, p, .apFsO.onkcGd, .apFsO.onkcGd:visited, .K6Ovqd, .Evt7cb, .Evt7cb:visited, .WOPwXe, .ViCi4, .tLDEHd, .dDKhVc, .asQXV, .rpo4wf, .J1raN:hover, .EZrbnd, .IqJTee, .A6dC2c, .DShyMc-MTkwMDQyNzU2MzY0 .VBEdtc-Wvd9Cc:hover, .DShyMc-MTkwMDQyNzU2MzY0.MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTkwMDQyNzU2MzY0 .MymH0d:hover .VBEdtc-Wvd9Cc, .NjE5zd, .DShyMc-AaTFfe.VnOHwf-Tvm9db, .DShyMc-AaTFfe .VnOHwf-Tvm9db, .DShyMc-AaTFfe.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky.VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky .VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2 .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2 .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.CNpREd .VnOHwf-Tvm9db, .xSP5ic, .Rq5Gcb, .ksaOtd, .DShyMc-MTcwNjk5NzM4Mjkx.VnOHwf-Tvm9db, .DShyMc-MTcwNjk5NzM4Mjkx .VnOHwf-Tvm9db, .DShyMc-MTcwNjk5NzM4Mjkx.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4 .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4 .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5.VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5 .VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1.VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1 .VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0 .VBEdtc-Wvd9Cc:hover, .DShyMc-MTIzMjUzMzg1OTU0.MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTIzMjUzMzg1OTU0 .MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTIzMjUzMzg1OTU0.VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0 .VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0.CNpREd .VnOHwf-Tvm9db {
    color: #fff;
    box-shadow: none;
}

wZTANe {
    color: white !important;    
}

.rpo4wf-J3yWx {
    color: white;
}

.Aopndd, .d4Fe0d, .GWZ7yf, .hgjBDc, .Xi8cpb:hover .LlcfK, .JPdR6b, .gHz6xd.rZXyy:not(.kKn9Nc):not(.u0dx8e):hover, .I7OXgf, .DShyMc-MTc0OTQxMzAwMzk3.bFjUmb-Ysl7Fe, .DShyMc-MTc0OTQxMzAwMzk3 .bFjUmb-Ysl7Fe, .DShyMc-MTM5ODA0NDQ5MjUz.bFjUmb-Ysl7Fe, .DShyMc-MTM5ODA0NDQ5MjUz .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1.bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf .idtp4e {
    background-color: var(--background-dark);
    border: .0625rem solid #373737;
    box-shadow: none;
}
.MHxtic:hover, .ncFHed, .EHzcec, .MHxtic.ndcsBf, .ybOdnf.iWO5td, .uQ3ESd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover.j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover .j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover.j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover .j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover .idtp4e {
    background: none;
    background-color: var(--background-dark);
    box-shadow: none;
}
.DShyMc-MTg0MjQ2MDIxMDky.bFjUmb-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .bFjUmb-Ysl7Fe {
    background-color: var(--background-dark);
}
.oBSRLe, .Lzdwhd-BrZSOd, .lziZub, .lziZub:visited {
    color: #8d8d8d;
}
.s2g3Xd, .PeGHgb.Q8U8uc .Ono85c+.oh9CFb, .PeGHgb.Q8U8uc .ruTJle+.fETHd, .ar1wE .eqqrO, .ySjuvd .eqqrO, .E5f6Vd, .ZNE4y, .ycbm1d, .LKqFXc, .P02DYb, .tUJKGd:not(:first-child), .O9YpHb {
    border-top: .0625rem solid #373737;
}
.joJglb, .u73Apc, .MHxtic:not(:last-child) {
    border-bottom: .0625rem solid #373737;
}
.oleV8d, .DShyMc-MTkwMDQyNzU2MzY0 .AeAAkf:not(.RDPZE):hover, .DShyMc-MTkwMDQyNzU2MzY0 .AeAAkf:not(.RDPZE).u3bW4e, .DShyMc-MTkwMDQyNzU2MzY0 .BEAGS:not(.RDPZE):hover, .DShyMc-MTkwMDQyNzU2MzY0 .BEAGS:not(.RDPZE).u3bW4e, .BEAGS:hover, .BEAGS, .Xp0OCe, .QTD2uf {
    border: .0625rem solid #373737;
}
.BOW64 {
    border-right: .0625rem solid #373737;
}
.SZ0kZe, .WMQb5e .oBSRLe, .MHxtic.ndcsBf, .d4Fe0d.s3BYNe {
    border: none;
}
.rZXyy.YwNp1, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):hover, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):focus, .MHxtic.ndcsBf {
    box-shadow: none;
}
.gHz6xd {
    margin: .0625rem 1.5625rem 1.5625rem .0625rem;
}
.DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover.j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover.idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover .j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover.j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover .j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover .idtp4e, .z80M1.FwR7Pc, .DShyMc-MTg0MTM1MDc2OTI0.bFjUmb-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .bFjUmb-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .QkA63b:not(.RDPZE), .DShyMc-MTkwMDQyNzU2MzY0 .Y5sE8d:not(.RDPZE), .ncFHed .MocG8c.KKjvXb, .DShyMc-AaTFfe .bFjUmb-Wvd9Cc.kRqvHe, .ry3kXd .MocG8c.KKjvXb, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover.j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover .j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover.j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover.idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover .j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover .idtp4e {
    background-color: #424242;
}
.fWf7qe .Yalane, .hqfVKd, .fWf7qe:not(.RDPZE):hover .Yalane, textarea, .DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .UISY8d-Ysl7Fe:hover, .DShyMc-MTg0MjQ2MDIxMDky.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg5OTc2MTkwMTI2.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg5OTc2MTkwMTI2.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg0MTM1MDc2OTI0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe.bFjUmb-Ysl7Fe, .DShyMc-AaTFfe .bFjUmb-Ysl7Fe, .DShyMc-AaTFfe .bFjUmb-Ysl7Fe.kRqvHe, .DShyMc-AaTFfe.bFjUmb-Wvd9Cc, .DShyMc-AaTFfe .bFjUmb-Wvd9Cc, .DShyMc-AaTFfe.CNpREd.bFjUmb-Wvd9Cc, .DShyMc-AaTFfe.CNpREd .bFjUmb-Wvd9Cc, .DShyMc-MTkwMDQyNzU2MzY0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTkwMDQyNzU2MzY0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0.bFjUmb-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .bFjUmb-Ysl7Fe, .IzVHde, .DShyMc-MTkwMTE1MjU3MTA0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTkwMTE1MjU3MTA0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover.j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover.idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover .j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover .idtp4e, .DShyMc-MTkwMTE1MjU3MTA0.bFjUmb-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .bFjUmb-Ysl7Fe, .DShyMc-MTcwNjk5NzM4Mjkx .UISY8d-Ysl7Fe:hover, .DShyMc-MTcwNjk5NzM4Mjkx.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTcwNjk5NzM4Mjkx .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4.bFjUmb-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .bFjUmb-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .UISY8d-Ysl7Fe:hover, .DShyMc-MTYxNDkyMTI1MTg4.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzNjUwOTUwMjY5.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5.bFjUmb-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzMDAxMzIxMDE1.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .P3W0Dd-Ysl7Fe:focus, .DShyMc-MTg0MTM1MDc2OTI0.maXJsd:focus .P3W0Dd-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .maXJsd:focus .P3W0Dd-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2.bFjUmb-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0.bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzMjUzMzg1OTU0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .MymH0d:hover .UISY8d-Ysl7Fe, .d4Fe0d.s3BYNe {
    background-color: transparent;
}
.DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:hover, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:hover *, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:focus, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:focus *, .DShyMc-MTkwMDQyNzU2MzY0.VnOHwf-Tvm9db, .DShyMc-MTkwMDQyNzU2MzY0 .VnOHwf-Tvm9db, .DShyMc-MTkwMDQyNzU2MzY0.CNpREd .VnOHwf-Tvm9db {
    color: inherit;
}
.lYU7F {
    color: #2e7d32;
}
.hVNH5c, .ncFHed, .EHzcec, .joJglb.kLHn3 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.Xp0OCe {
    border-radius: 0.25rem;
}
.udxSmc, .xSP5ic {
    color: #ffffff5a;
}
.neggzd { /* RACIST */
    color: #ffffff1a;
}
.DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTg0MjQ2MDIxMDky .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .DShyMc-MTkwMTE1MjU3MTA0 .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTkwMTE1MjU3MTA0 .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTkwMTE1MjU3MTA0 .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .DShyMc-MTkwMDQyNzU2MzY0 .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTkwMDQyNzU2MzY0 .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTkwMDQyNzU2MzY0 .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"] {
    background-color: #4242425a;
}

div.cnOaDb.I9OJHe {
    background-color: var(--hover-dark);
}

div.cnOaDb.I9OJHe:not(.vTcY1d) {
    border-radius: 100px;
}

.Erb9le:not(.RDPZE) .qmMNRc.y7OZL {
    background-color: rgb(108 105 105)
}
.editable {
    color: white !important;
}

.TisIWb .kKn9Nc:before {
    background-color: var(--hover-dark) !important;
}

.CIy9F {
    background-color: var(--hover-dark) !important;
}

:not([aria-disabled]) .snByac {
    color: white !important;
}

#UGb2Qe {
    color: white;
}

ul:not(.j70YMc ul), ol {
    background var(--background-dark) !important
}

ul:focus {
    background: var(--background-dark);
}

ol:focus {
    background: var(--background-dark);
}

ul:focus-within {
    background: var(--background-dark);
}

ol:focus-within {
    background: var(--background-dark);
}

.lGIiYb {
    background: var(--background-dark);
}

.google-material-icons {
    color: white;
}

.SZ0kZe {
    border-top: .0625rem solid white;
}

/* textareaithink */
[jsname="YPqjbf"] {
    background: var(--hover-dark) !important;
}


[guidedhelpid="classworkTab"] {
    color: white !important;
}

[guidedhelpid="studentTab"] {
    color: white !important;
}

.u2mfde {
    color: white !important;
}

.IzVHde {
    background: var(--background-dark)
}

.UvHKof .VnOHwf-Tvm9db {
    color: white;
}

.TisIWb .kKn9Nc {
    background: var(--hover-dark) !important;
    border-color: var(--hover-dark) !important;
}

.S3aLQd .bFjUmb-Ysl7Fe {
	background: var(--hover-dark) !important;
}

c-wiz.SSPGKf {
    background: var(--background-dark);
    border-radius: 50px;
}

div.EHzcec.eejsDc {
    background: #0f0f0f;
}

.Rq5Gcb {
    color: white;
    font-weight: bold;
}

.ZoT1D:hover.idtp4e {
    background: var(--hover-dark) !important;
}

.qk0lee:focus:after {
    background: var(--hover-dark) !important;
}

.S3aLQd .UISY8d-Ysl7Fe:hover {
    background: var(--hover-dark) !important;
}

.S3aLQd .P3W0Dd-Ysl7Fe:focus {
    background: var(--hover-dark) !important;
}

.UvHKof .UISY8d-Ysl7Fe:hover {
    background: var(--hover-dark) !important;
}

.UvHKof .P3W0Dd-Ysl7Fe:focus {
    background: var(--hover-dark) !important;
}

.zvzLKc .P3W0Dd-Ysl7Fe:focus {
    background: var(--hover-dark) !important;
}

.zvzLKc .bFjUmb-Ysl7Fe, .Mupove .bFjUmb-Ysl7Fe, .UvHKof .bFjUmb-Ysl7Fe, .WFUiUb .bFjUmb-Ysl7Fe, .ee1HBc .bFjUmb-Ysl7Fe, .g2MItd .bFjUmb-Ysl7Fe, .Ag4wUb .bFjUmb-Ysl7Fe, .ZoT1D:focus-within.idtp4e {
    background: var(--hover-dark) !important;
}

.GWZ7yf {
    box-shadow: var(--neon-blue) 0px 4px 6px, var(--neon-blue) 3px 4px 5px
}

.qhnNic {
    box-shadow: var(--neon-blue) 0px 4px 6px, var(--neon-blue) 3px 4px 5px
}

.nCP5yc:disabled > .VfPpkd-vQzf8d {
    color: var(--hover-dark-2);
}

.aSjeL.aSjeL td {
    background: var(--hover-dark);
}

.TJtJXb td {
    background: var(--hover-dark);
}

.DC55n td {
    background: var(--background-dark);
}
 
a.tX9u1b:active {
    background: #1f1f1f;
}

span.tX9u1b:hover span.Rq5Gcb {
    background: #1f1f1f;
}

a.tX9u1b:hover {
    background: #1f1f1f;
}

a.QgddUc .tX9u1b:focus {
    background: #1f1f1f;
}

.RMrItf, .Kqfayb {
    color: white;
}

.OK1tJe {
    background: var(--hover-dark);
}

.z80M1.FwR7Pc {
    background: var(--hover-dark);
}

.UjXaMc {
    color: white;
}

.jlfrG:before, .jlfrG:after {
    background: var(--hover-dark);
}

.lnAGpc {
    background: var(--hover-dark);
}

.TdC1bb, .feojCc {
    background: var(--background-dark);
}

.WagS8 {
    background: var(--background-dark);
}

.ETRkCe {
    box-shadow: 5px 4px 4px 0 rgba(255,255,255,.3), 0 8px 12px 6px rgba(255,255,255,.15);
}

.KEDCCd {
    background: var(--background-dark) !important;
}

.Tabkde .OX4Vcb {
    background: var(--background-dark) !important;
}

.EY8ABd .VfPpkd-z59Tgd {
    background: var(--hover-dark) !important;
}

.theme-switcher {
    background: var(--background-dark) !important;
}

.theme-switcher:hover, .theme-switcher:focus-visible {
    background: var(--hover-dark) !important;
}

.theme-switcher:focus-visible {
    outline: 1px solid #a5a7ad;
}

.gb_Mc .gb_Vd.gb_re button:hover svg, .gb_Vd button:hover svg, .gb_d:hover {
    background: var(--hover-dark) !important;
}

.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc.sEZiv.TYHMlb.oxacD:hover, .VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc.sEZiv.TYHMlb.oxacD:focus {
    background: var(--hover-dark) !important;
    border-radius: 50%;
}

div.XfQwid.lziZub.xd70xe.n0p5v.V8apv {
    background: var(--hover-dark);
}

.VfPpkd-kBDsod rect, .VfPpkd-kBDsod path, .VfPpkd-kBDsod polygon  {
    color: var(--neon-blue);
}

.Gfjxy.bFjUmb-Ysl7Fe.Fh209b, .Gfjxy .bFjUmb-Ysl7Fe.Fh209b {
	background: var(--hover-dark);
}

.WmnPA:not(.VfPpkd-fmcmS-yrriRe-OWXEXe-OWB6Me) {
    background: var(--hover-dark);
}

.WmnPA:not(.VfPpkd-fmcmS-yrriRe-OWXEXe-OWB6Me) .VfPpkd-fmcmS-wGMbrd {
    color: white;
    background: var(--hover-dark);
}
.WmnPA:not(.VfPpkd-fmcmS-yrriRe-OWXEXe-OWB6Me) .VfPpkd-fmcmS-wGMbrd::placeholder {
    color: rgb(200, 200, 200);
}

.RU1zt.bFjUmb-Ysl7Fe.Fh209b, .RU1zt .bFjUmb-Ysl7Fe.Fh209b {
    background: var(--hover-dark);
}

.ez2f3.bFjUmb-Ysl7Fe.Fh209b, .ez2f3 .bFjUmb-Ysl7Fe.Fh209b {
    background: rgb(147, 111, 147);
}

.utl4Ze.bFjUmb-Ysl7Fe.Fh209b, .utl4Ze .bFjUmb-Ysl7Fe.Fh209b {
    background: rgb(129, 149, 169);
}

.IqjVqf.bFjUmb-Ysl7Fe.Fh209b, .IqjVqf .bFjUmb-Ysl7Fe.Fh209b {
    background: rgb(187, 161, 152);
}

.yiBaHe.bFjUmb-Ysl7Fe.Fh209b, .yiBaHe .bFjUmb-Ysl7Fe.Fh209b {
    background: rgb(123, 173, 140); 
}

.kiR7tf.bFjUmb-Ysl7Fe.Fh209b, .kiR7tf .bFjUmb-Ysl7Fe.Fh209b {
    background: rgb(140, 168, 177);
}

.KrJjFb.bFjUmb-Ysl7Fe.Fh209b, .KrJjFb .bFjUmb-Ysl7Fe.Fh209b {
    background: rgb(150, 139, 173)
}

.gb_A:hover, .gb_A:focus-visible {
    background: var(--hover-dark);
}

.gb_A:focus-visible {
    outline: 1px solid #a5a7ad;
}

.N6nSod {
    background: var(--hover-dark);
}

.Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover.rXdid, .Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover.h7Ww0, .Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover .rXdid, .Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover .h7Ww0, .xWw7yd:hover.rXdid, .xWw7yd:hover.h7Ww0, .xWw7yd:hover .rXdid, .xWw7yd:hover .h7Ww0 {
    background: var(--hover-dark);
}

.go6aXd.xAKnLc, .fum4Tb.xAKnLc, tbody .vvqDLc.xAKnLc {
    background: var(--hover-dark);
}

.go6aXd, .fum4Tb, tbody .vvqDLc {
    background: var(--background-dark);
}

.fHar6b, .RUkyfb, thead .vvqDLc {
    background: var(--background-dark);
}

.q1Kmyc.cjzpkc-Wvd9Cc.GngEL {
    overflow: hidden;
}

.tAVIoc.I9OJHe {
    background: var(--hover-dark);
}

.vnnr5e:not(.RDPZE):hover .I9OJHe, .vnnr5e:not(.RDPZE):hover .CIy9F {
    background: var(--hover-dark-2) !important;
}

.kYtXye .UISY8d-Ysl7Fe:hover, .kYtXye.MymH0d:hover .UISY8d-Ysl7Fe, .kYtXye .MymH0d:hover .UISY8d-Ysl7Fe {
    background: rgb(129, 149, 169);
}

.NhkgIc.VnOHwf-Tvm9db.xSP5ic.NMm5M {
    fill: white;
}

.gHz6xd.Aopndd.rZXyy:hover {
    outline: 1px var(--hover-light-2) solid;
}

.EN2Rfc:not(.RDPZE) .XTO5bf.y7OZL {
    background: var(--hover-dark-2);
    border-radius: 50%;
}

.fyExH {
    background: rgb(94 136 177);
}

.Ne8lhe .VfPpkd-muHVFf-bMcfAe:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.VfPpkd-YQoJzd {
    border-color: white;
}

.Ne8lhe:hover .VfPpkd-muHVFf-bMcfAe:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.VfPpkd-YQoJzd {
    border-color: var(--hover-light);
}

.Ne8lhe.VfPpkd-ksKsZd-mWPk3d-OWXEXe-AHe6Kc-XpnDCe .VfPpkd-muHVFf-bMcfAe:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.VfPpkd-YQoJzd, .Ne8lhe:not(.VfPpkd-ksKsZd-mWPk3d):focus .VfPpkd-muHVFf-bMcfAe:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.VfPpkd-YQoJzd {
    border-color: var(--hover-light);
}
`;

function changeTheme(theme) {
    if (theme == "Dark") {
        document.body.insertBefore(darkModeStyleElement,document.body.firstChild);
        sunIcon.style.setProperty("display", "none");
        moonIcon.style.setProperty("display", "block");
    } else if (theme == "Light") {
        darkModeStyleElement.remove();
        sunIcon.style.setProperty("display", "block");
        moonIcon.style.setProperty("display", "none");
    }

    overlay.style.setProperty("background", "transparent");
    overlay.style.setProperty("pointer-events", "none");
    overlay.removeEventListener("transitionend", changeTheme, true);
}

function toggleValue() {
    if (darkModeState === String(true)) {
        darkModeState = "false";
    } else if (darkModeState === String(false)) {
        darkModeState = "true";
    }

    localStorage.setItem("darkModeState", String(darkModeState));
}

function toggleTheme() {
    if (darkModeState === String(true)) {
        toggleValue()
        overlay.style.setProperty("background","white");
        overlay.style.setProperty("pointer-events", "all");
        overlay.addEventListener("transitionend",() => {
            changeTheme("Light");
        });
    } else if (darkModeState === String(false)) {
        toggleValue()
        overlay.style.setProperty("background","black");
        overlay.style.setProperty("pointer-events", "all");
        overlay.addEventListener("transitionend",() => {
            changeTheme("Dark");
        });
    }
}

themeSwitcher.onclick = toggleTheme

if (darkModeState === String(false)) {
    sunIcon.style.setProperty("display", "block");
    moonIcon.style.setProperty("display", "none");
} else if (darkModeState === String(true)) {
    sunIcon.style.setProperty("display", "none");
    moonIcon.style.setProperty("display", "block");
    document.body.insertBefore(darkModeStyleElement, document.body.firstChild);
    
    console.log("%cDark Mode Loaded Successfully","font-size: 1rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background: black; border-radius: 5px;")
}    