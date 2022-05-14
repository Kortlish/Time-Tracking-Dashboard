const work = document.querySelector('.work')
const play = document.querySelector('.play')
const study = document.querySelector('.study')
const exercise = document.querySelector('.exercise')
const social = document.querySelector('.social')
const selfCare = document.querySelector('.self-care')
const daily = document.querySelector('[data-daily]')
const weekly = document.querySelector('[data-weekly]')
const monthly = document.querySelector('[data-monthly]')

const cards = [work, play, study, exercise, social, selfCare]

const toDaily = () => {
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    fetch('./data.json').then(resp => {
        return resp.json()
    }).then(data => {
        

        for(let i = 0; i < cards.length; i++)
        {
            const currentData = cards[i].querySelector('.card__main-content')
            const previousData = cards[i].querySelector('.card__main-subcontent')
            const DailyData = data[i].timeframes.daily
            currentData.textContent = DailyData.current + 'Hrs';
            previousData.textContent = `Last Week - ${DailyData.previous}Hrs`
        }
    })
    
}

const toWeekly = () => {
    weekly.classList.add('active')
    daily.classList.remove('active')
    monthly.classList.remove('active')
    fetch('./data.json').then(resp => {
        return resp.json()
    }).then(data => {
        

        for(let i = 0; i < cards.length; i++)
        {
            const currentData = cards[i].querySelector('.card__main-content')
            const previousData = cards[i].querySelector('.card__main-subcontent')
            const DailyData = data[i].timeframes.weekly
            currentData.textContent = DailyData.current + 'Hrs';
            previousData.textContent = `Last Week - ${DailyData.previous}Hrs`
        }
    })
    
}

const toMonthly = () => {
    monthly.classList.add('active')
    daily.classList.remove('active')
    weekly.classList.remove('active')
    fetch('./data.json').then(resp => {
        return resp.json()
    }).then(data => {
        

        for(let i = 0; i < cards.length; i++)
        {
            const currentData = cards[i].querySelector('.card__main-content')
            const previousData = cards[i].querySelector('.card__main-subcontent')
            const DailyData = data[i].timeframes.monthly
            currentData.textContent = DailyData.current + 'Hrs';
            previousData.textContent = `Last Week - ${DailyData.previous}Hrs`
        }
    })
    
}

daily.addEventListener('click', toDaily)
weekly.addEventListener('click', toWeekly)
monthly.addEventListener('click', toMonthly)