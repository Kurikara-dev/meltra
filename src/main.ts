import './style.css'

console.log('meltra CDE Platform - 初期化完了')

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="meltra-container">
    <h1>meltra</h1>
    <p>建設業向けISO 19650準拠CDE統合プラットフォーム</p>
    <div class="status">
      <span>Status: 開発環境セットアップ完了</span>
    </div>
  </div>
`