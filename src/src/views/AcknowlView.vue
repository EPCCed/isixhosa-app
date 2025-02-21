<script setup>
</script>

<template>

<div class="container">
  
  <!-- Adjust width depending on small or larger screen size, by total columns used -->
  <div col-sm-6 col-12>

    <!--  Page title -->
    <div class="header">
       <br> 
       <h4> ACKNOWLEDGEMENTS </h4>
    </div>

    <div class="set-width">
        <br>
    </div>
    
    <!-- Main text -->
    <div class="ack-middle">
        <table class="table table-sm table-striped"> 
            <thead> 
                <tr> 
                    <th>App Development</th> 
                    <th>ixiXhosa PHQ-9 Development</th> 
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
                        &nbsp &nbsp &nbsp &nbsp University of Edinburgh</td> 
                        <td>Busiswa Fanqa<br>
                            &nbsp &nbsp &nbsp &nbsp University of Stellenbosch</td> 
                </tr> 
                <tr> 
                    <td>EPCC<br>
                        &nbsp &nbsp &nbsp &nbsp University of Edinburgh</td> 
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
        </div>

    <!--  University Logos -->
    <br><br>
    <div class="d-flex align-items-center justify-content-between">
        <img alt="isiXhosa" src="../assets/UoELogo.png" width="120" height="30"/>
        <img alt="isiXhosa" src="../assets/StellenboschLogo.png" width="120" height="30"/>
    </div>
    <br><br>
    
    <!--  Navigation Footer  -->
    <div class="mt-auto footer">
        <div class="d-flex align-items-center justify-content-between">
            <RouterLink to="/aboutapp" class = "leftbutton"> &#8592 </RouterLink>
            <RouterLink to="/" class = "rightbutton"> &#8594 </RouterLink>
        </div>
    </div>

</div>
</div>
    
</template>


<style scoped>

table {
  margin-left:200;
  width:100%;
  margin: 0px auto;
}
th {
  font-weight: 700;
  font-size: 0.8rem;
  padding:50;
}
td {
  font-weight: 200;
  font-size: 0.7rem;
  text-align: left;
}
.header {
  padding: 5%;
  background-color: darkred;
  color: white;
  text-align: center;
  margin: auto;
  width: 100%;
  height: 15vh;
}
.ack-middle {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
width: 100%;
height: 50vh; 
  margin-left: 0vw;
  margin-right: 0vw;
}
.ack-footer {
  padding: 2%;
  background-color: darkred;
  color: white;
  /* height: 20vh; */
}

</style>