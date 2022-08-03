<script>
  import { _ } from "svelte-i18n";
</script>

<header class="container-fluid bg-light p-3">
  <div class="row">
    <div class="col-12">
      <h1
        class="text-center text-lg-start animate__animated animate__fadeInDown"
      >
        <i class="twicon-main-island fs-1" />
        {$_("beforeHeader.Heading")}
      </h1>
      <p
        class="text-center text-lg-start mb-0 mb-md-2 animate__animated animate__fadeInDown"
      >
        {$_("beforeHeader.SubHeading")}
      </p>
    </div>
  </div>
</header>
