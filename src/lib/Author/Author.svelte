<script>
  import { _ } from "svelte-i18n";
</script>

<!-- 修改 head 資訊 -->
<svelte:head>
  <title>{$_("Author.title")}</title>
</svelte:head>

<section class="container-fluid my-3 overflow-hidden">
  <div class="row">
    <section class="col-12 col-lg-2 p-2">
      <img
        src="images/picture.jpg"
        alt="作者大頭照"
        class="myPicture img-fluid w-75 d-block mx-auto animate__animated animate__rotateInDownLeft"
      />
    </section>

    <section class="col-12 col-lg-10 p-2">
      <h2 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Author.introduction")}
      </h2>
      <hr class="animate__animated animate__fadeIn" />
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Author.introOne")}
      </p>
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Author.introTwo")}
      </p>
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Author.introThree")}
      </p>

      <br />

      <h2 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Author.skills")}
      </h2>
      <ul class="list-group animate__animated animate__fadeIn">
        <li class="list-group-item">HTML5</li>
        <li class="list-group-item">CSS3</li>
        <li class="list-group-item">JavaScript</li>
        <li class="list-group-item">SQL</li>
        <li class="list-group-item">Java</li>
        <li class="list-group-item">Python</li>
      </ul>
    </section>
  </div>
</section>

<style>
  .myPicture {
    border-radius: 50%;
  }
</style>
