<script>
  import { _ } from "svelte-i18n";

  let src = "images/GitHub.png";
  let alt = "GitHub Icon";
  let title = "前往 GitHub 儲存庫";
</script>

<footer class="container-fluid py-3 bg-dark text-center overflow-hidden">
  <p class="mb-2 text-light fs-5 animate__animated animate__slideInUp">
    {$_("Footer.footerParagraph")}
  </p>
  <a href="https://github.com/happyloa/Taiwan-Economy-History" target="_blank"
    ><img
      class="img-fluid animate__animated animate__slideInUp"
      {src}
      {alt}
      {title}
    /></a
  >
</footer>

<style>
  footer img {
    width: 50px;
  }
</style>
