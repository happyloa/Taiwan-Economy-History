<script>
  let src = "images/GitHub.png";
  let alt = "GitHub Icon";
  let title = "前往 GitHub 儲存庫";
</script>

<footer>
  <p>台灣經濟發展歷史 by 謝宗佑</p>
  <a href="https://github.com/happyloa/Taiwan-Economy-History" target="_blank"
    ><img {src} {alt} {title} /></a
  >
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    background-color: #312f2f;
  }

  footer p {
    font-size: 18px;
    color: white;
    margin-bottom: 10px;
  }

  footer img {
    width: 50px;
  }
</style>
