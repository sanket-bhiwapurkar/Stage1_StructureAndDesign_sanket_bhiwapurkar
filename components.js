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
                    <a class="nav-link" href="join.html" data-page="join">Join</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="contact.html" data-page="contact">Contact</a>
                </li>

            </ul>
        </div>

    </div>
</nav>
`,

    footer: `
<footer class="py-5">
    <div class="container-fluid">
        <div class="row">

            <div class="col-md-3 mb-3">
                <h5>CA Department</h5>
                <p class="text-body-secondary small">
                    Empowering students in computer applications through events, workshops, and innovation.
                </p>
            </div>

            <div class="col-md-2 mb-3">
                <h5>Quick Links</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-body-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="about.html" class="nav-link p-0 text-body-secondary">About</a></li>
                    <li class="nav-item mb-2"><a href="events.html" class="nav-link p-0 text-body-secondary">Events</a></li>
                    <li class="nav-item mb-2"><a href="gallery.html" class="nav-link p-0 text-body-secondary">Gallery</a></li>
                    <li class="nav-item mb-2"><a href="join.html" class="nav-link p-0 text-body-secondary">Join</a></li>
                    <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-body-secondary">Contact</a></li>
                </ul>
            </div>

            <div class="col-md-4 mb-3">
                <h5>Stay Connected</h5>
                <p>Get updates on events and activities.</p>

                <div class="d-flex gap-2">
                    <input type="email" class="form-control" placeholder="Email">
                    <button class="btn btn-primary">Subscribe</button>
                </div>
            </div>

        </div>

        <div class="border-top pt-3 mt-4 text-center text-body-secondary">
            © 2026 Computer Applications Department
        </div>

    </div>
</footer>
`
}