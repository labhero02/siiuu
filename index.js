function download(){
  
    const text = " 種人出棋野提若般高変写法分。安説後索風一台形社岩白局。夜報販婦感司立送庭種総移。集需感調暮変元速武動及集底紀屋子共形人覧。省係図軽天旅館設欧鳥弟力発訴。問経速街度帯介読準事信実。本意前誌表誌書上増政追止戦屋勝政付試。臣投上罪天賞掲半彼責記三美広三朝。霊接権庭法情仕玉載移必他首策田横国文論。性示文米題本加違豊加気的画味。面成案源出化購容衣権特芳銀奔入投悩余。納区置資使斉医校作括後聞応遺彼弾風。場伊天況権聞希崩議覚光具海台新日画関団疑。資欲東用整制分二治学参忽舞条臭。押暖面不庭得畑要談院者廃就回。駅視略転家止会平読投定記徒。目係提猟連遷匹画図死供浮歩謝議課抜高。者階能笠表喪都表権惑象舞国今働枚近改躍。池武理者稿堀退意揮生来尊海際誤独。海申威来績録局型生完策治。気条崎撃済真正邦代況倉能光転募京新人。促供政上開国県朝身薄年父野真雄第見根安。借慣調地奔辺型連最本所詳断報続。転護主抜通事験百救暮州地進昇天作容訃。問感食止水者認齢援月誰都京賞肝整実栄佐。同冠性新備住進経製大技動。高高婚療遺重謝国堀記下主稿気習定料。相逆徳遅用国定帰果敗解動為細本振況試接鮮。桜政下訴街日国輝仕内他掲化。遅守探動街活果食品郵者報上全聴人迫。般崎神道本記家戦愛巴皇作田員樽内記。頭基帯会刻語芸試上阪用工陣用脇能灰藤。訪読夫室当刈守天押国記間国手感合催点。費今櫓最店浮最見豊幕図速虐治尾武在違。容悪田始必位今観馬丁戦禁無。囲不経毒能断会浮掲極理物路集最情世。残選男真経項文歌招健島実定芸端高合。柏投報秀年問今氏害均風情南作新青。反長援紀間的軟姿必車術及動藤博。村属法単武性真下改記覚順面秀。称税護田確以熱更月子粟故藤護無真安医。無記若説性天役案給無員史今設。目不員審芸待永括曽重花定最楽超就感南。推亡誕非題暮会目制地権住需年全理。品対表流今今測誠電館禁証。教流尽載真受野必気意鹿堂。頻常権調道位碁住変常側価関徳法";
    
    const blob = new Blob([text], { type: 'text/plain' });
    
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    
    link.download = 'hacker-file.txt';
    document.body.appendChild(link);
  
    
    link.click();
  
    
    document.body.removeChild(link);
    
    document.body.style.backgroundColor = getRandomColor();
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
