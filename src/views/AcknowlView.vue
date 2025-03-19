<!--  ACKNOWLEDGEMENTS SCREEN           -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->
<script setup>
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

    <!--  Page title -->
    <div class="header-small">
       <br>
       <h4> ACKNOWLEDGEMENTS </h4>
    </div>

    <!-- Information text -->
    <div class="ack-middle">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>App Development</th>
                    <th>isiXhosa PHQ-9 Development</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arish Mudra Rakshasa-Loots<br>
                        &nbsp &nbsp &nbsp &nbsp University of Edinburgh</td>
                    <td>Arish Mudra Rakshasa-Loots<br>
                        &nbsp &nbsp &nbsp &nbsp University of Edinburgh</td>
                </tr>
                <tr>
                    <td>Heather C Whalley<br>
                        &nbsp &nbsp &nbsp &nbsp University of Edinburgh</td>
                    <td>Barbara Laughton<br>
                        &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                </tr>
                <tr>
                    <td>Barbara Laughton<br>
                        &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                    <td>Thandi Hamana<br>
                        &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                </tr>
                <tr>
                    <td>Lucy Norris<br>
                        &nbsp &nbsp &nbsp &nbsp EPCC, University of Edinburgh</td>
                    <td>Busiswa Fanqa<br>
                        &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Felicity Lindani<br>
                        &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                </tr>
                <tr>
                    <td></td>
                        <td>Kaylee van Wyhe<br>
                            &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                </tr>
                <tr>
                    <td></td>
                        <td>Sharon Kruger<br>
                            &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td>
                </tr>
            </tbody>
            </table>
            <br>
        </div>

<div class="fixed-bottom">
    <!--  University Logos -->
    <br>
    <div class="d-flex align-items-center justify-content-between logos">
        <img alt="isiXhosa" src="../assets/UoELogo.png" width="120" height="30"/>
        <img alt="isiXhosa" src="../assets/StellenboschLogo.png" width="120" height="45"/>
    </div>
    <br>

    <!--  Navigation Footer  -->
    <div class="mt-auto footer-small">
        <div class="d-flex align-items-center justify-content-between">
            <RouterLink to="/aboutapp" class = "leftbutton"> &#8592 </RouterLink>
            <RouterLink to="/" class = "rightbutton"> &#8594 </RouterLink>
        </div>
    </div>
</div>

</template>

<style scoped>
table {
  width:90vw;
  height: 48vh;
}
th {
  font-weight: 700;
  font-size: 0.8rem;
  padding:10px !important;
  padding-left: 10px !important;
}
td {
  font-weight: 200;
  font-size: 0.8rem;
  text-align: left;
  padding-left: 10px !important;
}
.ack-middle {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left;
  width: 90vw;
  height: 45vh;
  margin-top: 5vw !important;
  margin-left: 5vw !important;
  margin-right: 0% !important;
}
</style>