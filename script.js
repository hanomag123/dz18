window.addEventListener('load', function () {
    let script = document.querySelector('script');
    script.setAttribute("defer", "defer");

    let html = document.querySelector('html');
    html.setAttribute('lang','ru')

    let meta = document.createElement('meta');
    meta.setAttribute('charset', 'utf-8');
    document.head.append(meta);

    let title = document.createElement('title');
    title.innerText = ("Dz18");
    document.head.append(title);

    let link = document.createElement('link');
    link.setAttribute('rel', 'preconnect');
    link.setAttribute('href', 'https://fonts.googleapis.com')
    this.document.head.appendChild(link)

    let link2 = document.createElement('link');
    link2.setAttribute('rel', 'preconnect');
    link2.setAttribute('href', 'https://fonts.gstatic.com');
    link2.setAttribute('crossorigin', 'anonymous');
    this.document.head.appendChild(link2)

    let link3 = document.createElement('link');
    link3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap');
    link3.setAttribute('rel', 'stylesheet');
    this.document.head.appendChild(link3)

    let style = document.createElement('style');
    style.innerHTML = `
    * {
        padding: 0;
        margin: 0;
    }
    .title {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;

        color: #212121;
    }
    .discription {
        font-family: OpenSans;
        font-size: 14px;
        line-height: 26px;

        color: #9FA3A7;
    }
    .site__header {
        margin: 0 auto;
        width: 464px;
        height: 84px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 55px;
    }
    .site__container {
        margin: 0 auto;
        width: 800px;
        height: 480px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .site__container-wrapper {
        width: 210px;
        height: 324px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        text-align: center;
    }
    .site__container-item {
        width: 400px;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        
        border: 1px solid #E8E9ED;
        border-radius: 5px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
    }
    .site__container-item:last-child {
        background-color: #8F75BE;
        border: 1px solid #8F75BE;
        border-radius: 5px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
    }
    .site__container-item:last-child .title,
    .site__container-item:last-child .discription,
    .site__container-item:last-child button {
        color: #fff;
    }
    .site__container-header {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        text-transform: uppercase;

        color: #9FA3A7;
    }
    .site__container-item:last-child .site__container-header {
        color: #FFC80A;
    }
    button {
        width: 147px;
        height: 46px;

        border: 3px solid #FFC80A;
        border-radius: 23px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;

        letter-spacing: 2.4px;

        color: #212121;
        background-color: transparent;
    }
    `
    document.body.append(style);

    let div1 = document.createElement('div');
    div1.className = ('site');
    document.body.append(div1);

    let div2 = document.createElement('div');
    div2.className = ('site__header');
    div2.innerHTML = `<div class="title">Choose Your Option</div>
                        <div class="discription">But I must explain to you how all this mistaken idea of denouncing</div>
                        `;
    document.querySelector('.site').appendChild(div2);

    let div3 = document.createElement('div');
    div3.className = ('site__container')
    document.querySelector('.site').appendChild(div3)
    
    let div4 = document.createElement('div');
    div4.className = ('site__container-item')
    div4.innerHTML = `<div class="site__container-wrapper">
                        <div class="site__container-header">Freelancer</div>
                        <div class="title">Initially designed to</div>
                        <div class="discription">But I must explain to you how all this mistaken idea of denouncing</div>
                        <button>Start here</button>
                    </div>
    `;
    document.querySelector('.site__container').appendChild(div4)

    let div5 = div4.cloneNode(true)

    div5.querySelector('.site__container-header').innerHTML = 'studio';

    document.querySelector('.site__container').appendChild(div5)

})


