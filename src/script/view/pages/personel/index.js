const Personel = {
    async render() {
        return ` <section id="body-pd">
        <header class="header" id="header">
           <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
           <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
        </header>
        <div class="l-navbar" id="nav-bar">
           <nav class="nav">
              <div>
                 <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">BBBootstrap</span> </a>
                <div class="nav_list"> 
                    <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a>
                    <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Profil</span> </a>
                    <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">Pengajuan</span></a> 
                </div>
              </div>
              <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
           </nav>
        </div>
        <!--Container Main start-->
        <div class="height-100 bg-light">
           <h4>Main Components</h4>
        </div>
        <!--Container Main end-->
        </section> `
    },
    async afterRender() {
      const showNavbar = (toggleId, navId, bodyId, headerId) => {
         const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)
   
         // Validate that all variables exist
         if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
               // show navbar
               nav.classList.toggle('show')
               // change icon
               toggle.classList.toggle('bx-x')
               // add padding to body
               bodypd.classList.toggle('body-pd')
               // add padding to header
               headerpd.classList.toggle('body-pd')
            })
         }
      }
   
      showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
   
      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll('.nav_link')
   
      function colorLink() {
         if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
         }
      }
      linkColor.forEach(l => l.addEventListener('click', colorLink))
    
    },
}

export default Personel;