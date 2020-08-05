import React, { useState } from 'react'

// import './bulma-debug.css'
import snowboard from './assets/images/snowboard.jpg'

import camp from './assets/images/camp.jpg'
import dive from './assets/images/dive.jpg'
import fish from './assets/images/fish.jpg'

import ganmon from './assets/images/ganmon.png'
import kinugawa from './assets/images/kinugawa.jpg'
import fuji from './assets/images/fuji.jpg'

import pancake from './assets/images/pancake.jpg'
import sushi from './assets/images/sushi.jpg'
import stake from './assets/images/stake.jpg'

const App = () => {
  const style = {
    backgroundImage: `linear-gradient(rgba(20, 150, 237, 0.4) 0px, rgb(255, 255, 255) 100%), url(${snowboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div>
      <section className='hero is-info is-large is-hidden-mobile' style={style}>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title is-1 has-text-link'>f-maple</h1>
          </div>
        </div>
      </section>
      <section
        className='hero is-info is-fullheight is-hidden-tablet'
        style={style}
      >
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title is-1 has-text-link'>f-maple</h1>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='columns'>
              <div className='column'>
                <div className='content'>
                  <h1 className='title'>わたしについて</h1>
                  <p>
                    日本大学文理学部情報科学科尾上尾上研究室所属の高田楓我です。
                  </p>
                  <p>石川県で生まれて富山県で育ちました。</p>
                  <p>
                    今は東京で一人暮らしをしていて、普段は飲食店でアルバイトをしたり、友達と遊んだり、ReactやIonicをつかってwebサイトや、webアプリ、モバイルアプリを作ったりしている、極々普通の大学生です。
                  </p>
                  <h2 className='subtitle '>海でキャンプするのが好き</h2>
                  <div className='columns'>
                    <div className='column'>
                      <img src={camp} alt='キャンプの画像' />
                    </div>
                    <div className='column'>
                      <img src={fish} alt='取った海鮮の画像' />
                    </div>
                    <div className='column'>
                      <img src={dive} alt='海への飛び込みの画像' />
                    </div>
                  </div>
                  <p>
                    幼稚園の頃から毎年2回以上はキャンプに行っています。多い時は年に8回以上行くこともありました。
                  </p>
                  海に潜って魚を取ったり、魚を釣ったりするのもよし、焚火をするのもよし、浜辺で海を眺めたり時間を忘れてのんびり寝っ転がるだけもよし。
                  そんななんでもありなキャンプに行ったことはありますか？
                  <p>
                    取った魚を料理したりBBQをしたりするんですが、外で食べるご飯はお店でも家でも味わうことができない、キャンプだけの特別なおいしさがあります。
                  </p>
                  <p>
                    また、夜はすることがなさそうと思われがちなキャンプですが、トランプで遊んだり夜空の星を眺めたりできるので全然退屈することはありません！
                  </p>
                  <p>
                    今新幹線が開通して意外と注目されている北陸。
                    自然に囲まれた北陸でキャンプするの、おすすめです。
                  </p>
                  <p style={{ color: 'red' }}>
                    &#x203B;貝などは取ってはいけないことが多いので、事前に調べておくようにしましょう。
                  </p>
                  <div className='columns'>
                    <div className='column'></div>
                    <div className='column'></div>
                  </div>
                  <h2 className='subtitle '>旅行が好き</h2>
                  <div className='columns'>
                    <div className='column'>
                      <img src={kinugawa} alt='鬼怒川温泉の画像' />
                    </div>
                    <div className='column'>
                      <img src={fuji} alt='鬼怒川温泉の画像' />
                    </div>
                    <div className='column'>
                      <img src={ganmon} alt='巌門の画像' />
                      <div className='column'></div>
                    </div>
                  </div>
                  <p>
                    キャンプにちょっとかぶってしまうところもあるんですが、旅行も好きです。
                  </p>
                  <p>
                    今年はまだ鬼怒川温泉にしかいけていないけど、コロナが落ち着いて旅行できるようになったら必ずどこかにいこうと思っています。
                  </p>
                  <p>
                    写真は鬼怒川温泉、静岡で撮った富士山、石川県にある巌門です。
                  </p>
                  <p>
                    生きている間に47都道府県全てを旅行して、海外にもたくさん行ってみたいです。
                  </p>
                  <p>
                    運転が好きなので、旅行も運転も楽しめて一石二鳥で嬉しいです。
                  </p>
                  <h2 className='subtitle '>食べることが好き</h2>
                  <div className='columns'>
                    <div className='column'>
                      <img src={pancake} alt='パンケーキの画像' />
                    </div>
                    <div className='column'>
                      <img src={stake} alt='ステーキの画像' />
                    </div>
                    <div className='column'>
                      <img src={sushi} alt='お寿司の画像' />
                    </div>
                  </div>
                  <p>おいしいものをたくさん食べるのが好きです。</p>
                  <p>
                    お金に余裕がある時はだいたい一緒に行った友達の1.5倍くらい食べます。
                    お酒もたくさん飲みます。
                  </p>
                  <p>
                    昔から味付けの好き嫌いが激しく、外食に行ってもいつも同じものばかり食べていました。
                    しかし、受験期に行った東進の合宿で、ハードすぎて食べないと死ぬと思ってからは、ほとんど好き嫌いがなくなりました。
                    おかげで食べることがより楽しくなり、今まで食べられなかったものもたくさん食べられるようになりました。
                  </p>
                  <br />
                  <p>
                    写真は
                    <a href='https://www.eggsnthingsjapan.com/'>
                      Eggs'n Things
                    </a>
                    のパンケーキ、キャンプで焼いたステーキ、
                    <a href='http://www.banyanosushi.jp/'>番やのすし</a>
                    のお寿司です。
                  </p>
                  <p>
                    この写真のパンケーキが人生で初めて食べたパンケーキなのですが、あまりのおいしさにもう一つ頼んだ記憶があります。
                  </p>
                  <p>
                    お肉はいつかはキャンプで炭火でステーキを焼いてみたいという夢を叶えた時の写真です。
                    基本的に分厚くて柔らかいお肉が好きです（高い）。
                    次は平らな石を探して、その石の上で焼いてみたいです。
                  </p>
                  <p>
                    番やのすしには富山に帰省するたびに連れて行ってもらってます。
                    100円寿司よりは高いけど、そこそこリーズナブルな価格でお寿司が食べられます。
                    個人的に富山で一番お勧めできるお寿司屋さんです。
                    番やのすしと同じくらいのお寿司を東京で食べたら倍以上はするんじゃないかな？と思ってます。
                  </p>
                  <h2 className='subtitle '>プログラミングが好き</h2>
                  <div className='columns'>
                    <div className='column'>
                      <p>
                        大学に入ってから始めたプログラミングが大好きです。最近は自分のプログラミングスキルを高めるためにたくさん勉強しています。近いうちに友人と作っているアプリをリリースするので、よかったら使ってみてください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='column is-4'>
                <div className='content'>
                  <h2 className='subtitle '>リンク</h2>
                </div>
                <aside className='menu'>
                  <ul className='menu-list'>
                    <li className='level'>
                      <div className='level-left'>
                        <div className='level-item'>
                          <span className='icon is-large has-text-link'>
                            <i className='fab fa-github fa-2x'></i>
                          </span>
                          <a href='https://github.com/FugaTakata'>GitHub</a>
                        </div>
                      </div>
                    </li>
                    <li className='level'>
                      <div className='level-left'>
                        <div className='level-item'>
                          <span className='icon is-large has-text-link'>
                            <i className='fab fa-twitter fa-2x'></i>
                          </span>
                          <a href='https://twitter.com/maple__f'>Twitter</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='container'>
          <div className='content has-text-centered'>
            <p>&copy; 2020 Fuga Takata</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
