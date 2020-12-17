let sebesség = 75
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.freestyle(sebesség, sebesség)
basic.forever(function () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, sebesség)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(sebesség, 0)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_0)) {
        RingbitCar.freestyle(sebesség, sebesség)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3)) {
        RingbitCar.freestyle(sebesség, 0)
    }
})
