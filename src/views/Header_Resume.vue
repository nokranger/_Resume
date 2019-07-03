<template>
<div id="main-wrapper">
    <title>{{ title }}</title>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
<div class="columns-block">
<div class="left-col-block blocks">
    <header class="header">
        <div class="content text-center">
            <h1>Hi, I'm Anusorn Thavornpon!</h1>
            <p class="lead">Computer Engineering</p>
            <ul class="social-icon">
                <li><a :href="''+ facebook" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a :href="''+ twitter" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a :href="''+ linkedin" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a :href="''+ github" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></li>
            </ul>
            <br>
            <ul class="social-icon">
                <li><a href="#aboutme"><i class="fas fa-home" aria-hidden="true"></i></a></li>
                <li><a href="#personal"><i class="fas fa-user-circle" aria-hidden="true"></i></a></li>
                <li><a href="#skill"><i class="fas fa-code" aria-hidden="true"></i></a></li>
                <li><a href="#exp"><i class="fas fa-users" aria-hidden="true"></i></a></li>
                <li><a href="#education"><i class="fas fa-university" aria-hidden="true"></i></a></li>
                <li><a href="#contack"><i class="fas fa-address-book" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        <div class="profile-img"></div>
    </header>
    <!-- .header-->
</div>


<div class="right-col-block blocks">
<section class="intro section-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">
                    <a name="aboutme"><h2>What I am all about.</h2></a>
                </div>
            </div>
            <div class="col-md-12">
                <p>
rqwrqwrqrqw
                </p>
rqwrqwr
                <p>

                </p>
            </div>
        </div>
    </div>
</section>


<section class="expertise-wrapper section-wrapper gray-bg">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">
                    <a name="personal"><h2>Personal information</h2></a>
                </div>
            </div>
        </div>
        <!-- .row -->

        <div class="row">
            <div class="col-md-12">
                <div class="expertise-item">
                    <h3>Professionally drive</h3>
                    <p>
                        Synergistically strategize customer directed resources rather than principle.
                    </p>
                </div>
            </div>
        </div>
        <!-- .row -->
    </div>
    <!--.container-fluid-->
</section>
<!-- .expertise-wrapper -->

<section class="section-wrapper skills-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">
                    <a name="skill"><h2>Skills</h2></a>
                </div>
            </div>
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-md-12">
                <div class="progress-wrapper">

                    <div class="progress-item">
                        <span class="progress-title"><h5>Hardware</h5></span>
                        <div>
                            <i class="fas fa-microchip" aria-hidden="true"></i> : 
                            <label>Embedded Systems</label>
                            <b-progress :value="75" variant="success"></b-progress>
                        </div>
                        <div>
                            <i class="fab fa-python" aria-hidden="true"></i> :  
                            <label>Python</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                        </div> 
                        <div>
                            <label>Arduino</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                        </div>
                        <div>
                            <label>Kiel</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                            <br>
                        </div>                                                                 
                        
                        <!-- .progress -->
                    </div>
                    <!-- .skill-progress -->


                    <div class="progress-item">
                        <span class="progress-title"><h5>Frontend</h5></span>
                        <div>
                            <i class="fab fa-html5" aria-hidden="true"></i> :
                            <label>HTML</label>
                            <b-progress :value="100" variant="success"></b-progress>
                        </div>
                        <div>
                            <i class="fab fa-css3-alt" aria-hidden="true"></i> :
                            <label>CSS</label>
                            <b-progress :value="75" variant="success"></b-progress>
                        </div>
                        <div>
                            <i class="fab fa-node-js" aria-hidden="true"></i> :
                            <label>Javascript</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                        </div>
                        <div>
                            <i class="fab fa-vuejs" aria-hidden="true"></i> :
                            <label>Vue.js</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                            <br>
                        </div>                                                
                        <!-- /.progress -->
                    </div>
                    <!-- /.skill-progress -->


                    <div class="progress-item">
                        <span class="progress-title"><h5>Backend</h5></span>
                        <div>
                            <i class="fab fa-node" aria-hidden="true"></i> :
                            <label>NodeJS</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                        </div>
                        <div>
                            <i class="fab fa-php" aria-hidden="true"></i> :
                            <label>PHP</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                            <br>
                        </div>
                        <!-- /.progress -->
                    </div>
                    <!-- /.skill-progress -->
                    <div class="progress-item">
                        <span class="progress-title"><h5>Other skills</h5></span>
                        <div>
                            <i class="fab fa-linux" aria-hidden="true"></i> :
                            <label>Linux</label>
                            <b-progress :value="50" variant="primary"></b-progress>
                        </div>
                        <!-- /.progress -->
                    </div>
                    <!-- /.skill-progress -->
                </div>
                <!-- /.progress-wrapper -->
            </div>
        </div>
        <!--.row -->
    </div>
    <!-- .container-fluid -->
</section>
<!-- .skills-wrapper -->
<section class="section-wrapper section-experience gray-bg">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title"><a name="exp"><h2>Experience</h2></a></div>
            </div>
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-md-12">
                <div class="content-item">
                    <small>2015 - Present</small>
                    <h3>Head of market research</h3>
                    <h4>Computer & Motor Ltd.</h4>

                    <p>United Kingdom, London</p>
                </div>
                <!-- .experience-item -->
                <div class="content-item">
                    <small>2012 - 2015</small>
                    <h3>Media Analyst</h3>
                    <h4>BizzNiss</h4>

                    <p>United Kingdom, London</p>
                </div>
                <!-- .experience-item -->
                <div class="content-item">
                    <small>2010 - 2012</small>
                    <h3>Budget Administrator</h3>
                    <h4>Somsom LLC</h4>

                    <p>United Kingdom, London</p>
                </div>
                <!-- .experience-item -->
            </div>
        </div>
        <!--.row-->
    </div>
    <!-- .container-fluid -->
</section>
<!-- .section-experience -->
<section class="section-wrapper section-education">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title"><a name="education"><h2>Education</h2></a></div>
            </div>
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-md-12">
                <div class="content-item">
                    <div role="tablist">
                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" @click="faculty_status = !faculty_status" v-b-toggle.accordion-1 variant="primary">2015 - 2018 Faculty of Computer engineering {{ faculty_status ? '+' : '-' }}</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ faculty_text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" @click="high_status = !high_status" v-b-toggle.accordion-2 variant="primary">2013 - 2015 High School {{ high_status ? '+' : '-' }}</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>I start opened because</b-card-text>
                            <b-card-text>{{ high_text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
        <!--.row-->
    </div>
    <!-- .container-fluid -->
</section>
<!-- .section-education -->
<section class="section-contact section-wrapper gray-bg">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">
                    <a name="contack"><h2>Contact</h2></a>
                </div>
            </div>
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-md-12">
                <address>
                    <strong>Address</strong><br>
                    62/36 M2 Thung-mapraw<br>
                   Thai-muang Phang-nga, TH 82120
                </address>
                <address>
                    <strong>Mobile Number</strong><br>
                    <a href="tel:098-1265683">098-1265683,</a><br>
                    <a href="tel:093-5745735">093-5745735</a>
                </address>
                <address>
                    <strong>Email</strong><br>
                    <a href="mailto:#">anusorn.thavornporn@gmail.com</a>
                </address>
            </div>
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-md-12">
                <div class="feedback-form">
                    <h2>Get in touch</h2>

                    <form id="contactForm" action="sendemail.php" method="POST">
                        <div class="form-group">
                            <label for="InputName">Name</label>
                            <input type="text" name="name" required="" class="form-control" id="InputName"
                                   placeholder="Full Name">
                        </div>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" name="email" required="" class="form-control" id="InputEmail"
                                   placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="InputSubject">Subject</label>
                            <input type="text" name="subject" class="form-control" id="InputSubject"
                                   placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="control-label">Message</label>
                            <textarea class="form-control" rows="4" required="" name="message" id="message-text"
                                      placeholder="Write message"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <!-- .feedback-form -->
            </div>
        </div>
    </div>
    <!--.container-fluid-->
</section>
<!--.section-contact-->

<footer class="footer">
    <div class="copyright-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="copytext">&copy; <a
                            href=""></a></div>
                </div>
            </div>
            <!--.row-->
        </div>
        <!-- .container-fluid -->
    </div>
    <!-- .copyright-section -->
</footer>
<!-- .footer -->
</div>
<!-- .right-col-block -->
</div>
<!-- .columns-block -->
</div>
</template>
<script>
export default {
 data () {
    return {
        high_status: true,
        faculty_status: false,
        high_text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolorbrunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moontempor, sunt aliqua put a bird on it squid single-origin coffee nulla",
        faculty_text: "fasfafasfasfasfsafasfsafasfsafsafsafa",
        facebook: 'https://web.facebook.com/anusornthavornpon',
        linkedin: 'https://www.linkedin.com/in/anusornthavornponcomen/',
        github: 'https://github.com/nokranger',
        twitter: 'https://twitter.com/nokraner',
        title: 'Anusorn Thavornpon'

     }
 }   
}
</script>
<style scoped>
@import '../assets/css/style.css';
</style>

