import Image from 'next/image'
import React, { useState } from 'react'
import OfferDetails from './ui/OfferDetails';

const Offer = () => {

  const offerText = [
    {title: "Промоція у 3 Instagram Stories", text: "Розміщення інформації про компанію в 3 Instagram-stories на сторінці @best_lviv."},
    {title: "Фотозвіт та згадка про компанію в постівентному відео", text: "Після завершення змагань кожна компанія-партнер отримає звітність з усіма фотографіями компанії. Також логотип компанії з’явиться наприкінці відео, що створюється для підсумовування події та буде розміщене на Instagram-сторінці @best_lviv."},
    {title: "Логотип компанії на бренд-воллі", text: "Під час події буде розміщений великий банер з логотипами партнерів наших змагань."},
    {title: "Логотип на сайті події", text: "Розміщення логотипа компанії на офіційному сайті події."},
    {title: "Транслювання відеоролика на місці події", text: "На місці проведення змагань буде транслюватися відео Вашої компанії (до двох хвилин). Відео надає компанія."},
    {title: "Розміщення банера на місці події:", text: "Упродовж змагань Ви матимете змогу розмістити банер Вашої компанії на місці проведення події. Банер та стійку до нього надає компанія."},
    {title: "Пост-дайджест у Telegram-каналі події:", text: "Розміщення інформації про компанію в Telegram-каналі BEST Lviv Students у спільному пості разом з іншими компаніями."},
    {title: "Роздача листівок компанії на місці події:", text: "Під час проведення змагань учасники змагань отримають листівки Вашої компанії у вітальних пакетах. Це дозволить підвищити впізнаваність Вашого бренду та залучити нових клієнтів. Листівки надає компанія."},
  ]

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleInfoClick = () => {
    setIsTooltipVisible(!isTooltipVisible);
  }

  return (
    <div className='mb-20 mt-20 lg:mt-40'>
      <div className="relative">
        <h1 className="mb-25 md:mb-45 text-center text-2xl mx-auto 490px:mx-0 w-[250px] 490px:w-full 490px:text-3xl sm:text-[36px] md:text-[40px] lg:text-[45px] xl:text-[54px] font-bold text-bec">За Вашу продукцію ми надамо:</h1>
        <Image 
          width={30}
          height={30}
          alt='.'
          src="/images/offer.svg"
          className='hidden lg:block w-full absolute -top-0 490px:-top-20 xl:-top-25 2xl:-top-30 3xl:-top-20 left-0 -z-10'
        />
        <Image 
          width={10}
          height={10}
          alt='.'
          src="/footer/offer.svg"
          className='block 490px:hidden w-full absolute -top-7 left-0'
        />
      </div>
      <div className="
        p-8 440px:p-10 mx-auto mt-10 relative w-[360px] 410px:w-[380px] 440px:w-[420px] 
        580px:w-[540px] 660px:w-[580px] 840px:w-full max-w-[700px] 2xl:max-w-[750px] info_bg border-2 
        border-bec
      ">
          
        <div className="absolute h-full top-0 -left-1 w-[5px] bg-bec" />
        <div className="absolute h-[5px] -top-[3px] -left-1 w-[80px] bg-bec" />
        <div className="absolute h-[5px] -bottom-[3px] -left-1 w-[80px] bg-bec" />
        
        <div className="absolute h-full top-0 -right-1 w-[5px] bg-bec" />
        <div className="absolute h-[5px] -top-[3px] -right-1 w-[80px] bg-bec" />
        <div className="absolute h-[5px] -bottom-[3px] -right-1 w-[80px] bg-bec" />

        <ul>
          {offerText.map((item, index) => (
            <li key={index} className="text-base 440px:text-lg 4xl:text-[22px] flex font-extralight justify-start">
              <Image
                src="/images/propositions/checkbox-line.svg"
                alt="participant"
                width={40}
                height={40}
                className="440px:w-[40px] w-[35px]"
              />
              <span className='flex items-center'>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="absolute top-6 right-4">
          <span
            className="flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 4xl:w-7 4xl:h-7 4xl:text-base cursor-pointer hover:scale-125 transition-all ease-in"
            onClick={handleInfoClick}
          >
            i
          </span>
        </div>
        {isTooltipVisible &&
          <OfferDetails onClose={() => setIsTooltipVisible(false)} text={offerText} />
        }
      </div>
    </div>
  )
}

export default Offer