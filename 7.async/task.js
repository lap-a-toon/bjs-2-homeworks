class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if(!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.checkTimer(time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        let alarm = new Object();
        alarm.callback = callback;
        alarm.time = time;
        let canCall = callback.call();
        alarm.canCall = canCall?canCall:true;
        this.alarmCollection.push(alarm);
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }
    checkTimer(time){
        let qwe = this.alarmCollection.filter(alarm => alarm.time === time);
        return qwe.length?true:false;
    }
    getCurrentFormattedTime(){
        const currentTime = new Date();
        return currentTime.toString().split(' ').splice(4,1)[0].split(':').splice(0,2).join(':');
    }
    start(){
        if(this.intervalId)
            return;
        this.intervalId = setInterval(()=>{
            this.alarmCollection.forEach((alarm,index)=>{
                if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall){
                    alarm.canCall = false;
                    alarm.callback.call();
                }
            })
        },1000);
    }
    resetAllCalls(){
        this.alarmCollection.forEach(alarm=>{
            alarm.canCall = true;
        });
    }
    stop(){
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection=[];
    }
}
