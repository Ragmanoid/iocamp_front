import React from 'react';

import '../../css/News.scss';

const NewsBlock = ({title, footer, body}) => {
    return (
        <div className='newsBlock'>
            <div className='title'>{title}</div>
            <div className='body'>{body}</div>
            <hr />
            <div className='footer'>{footer}</div>
        </div>
    )
}

const News = () => {
    return (
        <>
            <div className='news'>Новости: </div>

            <div className='newsGrid'>
                <NewsBlock
                    title={'Как сменить аватарку?'}
                    body={'В приложении нажмите на Вашу предыдущую аватарку и загрузите новую.'}
                    footer={'Бондарь Даниил Олегович / 17.08.2019 22:40:00'}
                />
                <NewsBlock
                    title={'Не переводятся деньги, но средств на счету достаточно?'}
                    body={'В системе имеется лимит на переводы в день. Если у Вас достаточно средств на счете, и перевод не осуществляется, значит вы превысили, либо превысите лимит на переводы.'}
                    footer={'Бондарь Даниил Олегович / 01.08.2020 21:36'}
                />
                <NewsBlock
                    title={'Лимиты на перевод'}
                    body={'Установлены лимиты на перевод. С сегодняшнего дня Вы можете перевести только 24 единицы валюты "Время" ежедневно.'}
                    footer={'Бондарь Даниил Олегович / 04.08.2020 17:54'}
                />
                <NewsBlock
                    title={'Лимиты на перевод'}
                    body={'Установлены лимиты на перевод. С сегодняшнего дня Вы можете перевести только 24 единицы валюты "Время" ежедневно.'}
                    footer={'Бондарь Даниил Олегович / 04.08.2020 17:54'}
                />
            </div>
        </>
    )
}

export default News;