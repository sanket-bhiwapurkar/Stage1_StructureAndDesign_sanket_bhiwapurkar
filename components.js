const Components = {
    header: `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

        <a class="navbar-brand" href="index.html">
            <img src="/assets/svg/logo.svg" class="logo-header" alt="">
            CA Department
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

                <li class="nav-item">
                    <a class="nav-link" href="index.html" data-page="home">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="about.html" data-page="about">About</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="events.html" data-page="events">Events</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="gallery.html" data-page="gallery">Gallery</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="contact.html" data-page="contact">Contact</a>
                </li>

            </ul>
        </div>

    </div>
</nav>
`,

    footer: `<footer class="py-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 col-md-3 mb-3">
                <h5 class="mb-2">CA Department</h5>
                <p class="text-body-secondary small border-start ps-3">
                    <strong>Empowering students</strong> in computer applications through events, workshops, and innovation.
                </p>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>Quick Links</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-body-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="about.html" class="nav-link p-0 text-body-secondary">About</a></li>
                    <li class="nav-item mb-2"><a href="events.html" class="nav-link p-0 text-body-secondary">Events</a></li>
                    <li class="nav-item mb-2"><a href="gallery.html" class="nav-link p-0 text-body-secondary">Gallery</a></li>
                    <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-body-secondary">Contact</a></li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>Activities</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><span class="nav-link p-0 text-body-secondary">Workshops</span></li>
                    <li class="nav-item mb-2"><span class="nav-link p-0 text-body-secondary">Hackathons</span></li>
                    <li class="nav-item mb-2"><span class="nav-link p-0 text-body-secondary">Projects</span></li>
                    <li class="nav-item mb-2"><span class="nav-link p-0 text-body-secondary">Tech Talks</span></li>
                </ul>
            </div>

            <div class="col-md-5 mb-3">
                <a href="index.html" class="d-flex align-items-center mb-3 text-decoration-none">
                    <img src="/assets/svg/logo.svg" class="logo-header" alt="">
                </a>
                <h5>Stay Connected</h5>
                <p>Get updates on events and activities.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <input type="email" class="form-control" placeholder="Email address">
                    <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
            <p>© 2026 Computer Applications Department. All rights reserved.</p>
        </div>
    </div>
</footer>`
}