$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }

        $('#capital_per_eff_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Capital Per Effective Worker',
                style: {
                    "fontSize": "12px" 
                }
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'k',
                data: (function () {
                    var data = [],
                            i,
                            k=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            // y: k
                            y: Math.round(100000*k)/100000
                        })
                            klag=k
                            k = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*k)/100000
                        })
                            klag=k,
                            k = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            },
            //  {
            //     name: 'Line 2',
            //     data: (function () {
            //         var data = [],
            //                 i;

            //         for (i = 1; i <= tmax; i++) {
            //             data.push({
            //                 x: i,
            //                 y: 0.5 * Math.pow(5-0.1 * i, 0.5)
            //             });
            //         }
            //         return data;
            //     })()
            // }
            ]
        });
    }) //.trigger('submit');
});




$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }

        $('#output_per_eff_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Output Per Effective Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'y',
                data: (function () {
                    var data = [],
                            i,
                            klag=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*param_A1*Math.pow(klag,param_alpha1))/100000
                        })
                            klag = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*param_A2*Math.pow(klag,param_alpha2))/100000
                        })
                            klag = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            },
            ]
        });
    }) //.trigger('submit');
});




$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }

        $('#cons_per_eff_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Consumption Per Effective Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'i',
                data: (function () {
                    var data = [],
                            i,
                            klag=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*(1-param_s1)*param_A1*Math.pow(klag,param_alpha1))/100000
                        })
                            klag = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*(1-param_s2)*param_A2*Math.pow(klag,param_alpha2))/100000
                        })
                            klag = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            }
            ]
        });
    }) //.trigger('submit');
});





$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }

        $('#inv_per_eff_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Investment Per Effective Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'i',
                data: (function () {
                    var data = [],
                            i,
                            klag=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*(param_s1)*param_A1*Math.pow(klag,param_alpha1))/100000
                        })
                            klag = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*(param_s2)*param_A2*Math.pow(klag,param_alpha2))/100000
                        })
                            klag = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            }
            ]
        });
    }) //.trigger('submit');
});




$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }

        $('#capital_per_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Capital Per Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'k',
                data: (function () {
                    var data = [],
                            i,
                            e=param_e0,
                            k=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*k*e)/100000
                        })
                            klag=k,
                            elag=e,
                            e = elag*(1+param_g1),
                            k = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*k*e)/100000
                        })
                            klag=k,
                            elag=e,
                            e = elag*(1+param_g2),
                            k = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            },
            //  {
            //     name: 'Line 2',
            //     data: (function () {
            //         var data = [],
            //                 i;

            //         for (i = 1; i <= tmax; i++) {
            //             data.push({
            //                 x: i,
            //                 y: 0.5 * Math.pow(5-0.1 * i, 0.5)
            //             });
            //         }
            //         return data;
            //     })()
            // }
            ]
        });
    }) //.trigger('submit');
});




$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }

        $('#output_per_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Output Per Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'y',
                data: (function () {
                    var data = [],
                            i,
                            e=param_e0,
                            k=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*e*param_A1*Math.pow(k,param_alpha1))/100000
                        })
                            elag=e,
                            e=(1+param_g1)*elag,
                            klag=k,
                            k = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*e*param_A2*Math.pow(k,param_alpha2))/100000
                        })
                            elag=e,
                            e=(1+param_g2)*elag,
                            klag=k,
                            k = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            },
            ]
        });
    }) //.trigger('submit');
});




$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }

        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }



        $('#cons_per_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Consumption Per Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            tooltip: {
                shape: "square"
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'c',
                data: (function () {
                    var data = [],
                            i,
                            e=param_e0,
                            k=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*e*(1-param_s1)*param_A1*Math.pow(k,param_alpha1))/100000
                        })
                            elag=e,
                            e=(1+param_g1)*elag,
                            klag=k,
                            k = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*e*(1-param_s2)*param_A2*Math.pow(k,param_alpha2))/100000
                        })
                            elag=e,
                            e=(1+param_g1)*elag,
                            klag=k,
                            k = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            },
            ]
        });
    }) //.trigger('submit');
});




$(document).ready(function () {


    $('#ParameterInput').on('submit', function (e) {
        e.preventDefault();
        var tmax = parseInt($('#tmax').val());
        var param_A1 = parseFloat($('#param_A1').val());
        var param_alpha1 = parseFloat($('#param_alpha1').val());
        var param_s1 = parseFloat($('#param_s1').val());
        var param_delta1 = parseFloat($('#param_delta1').val());
        var param_g1 = parseFloat($('#param_g1').val());
        var param_n1 = parseFloat($('#param_n1').val());
        var param_A2 = parseFloat($('#param_A2').val());
        var param_alpha2 = parseFloat($('#param_alpha2').val());
        var param_s2 = parseFloat($('#param_s2').val());
        var param_delta2 = parseFloat($('#param_delta2').val());
        var param_g2 = parseFloat($('#param_g2').val());
        var param_n2 = parseFloat($('#param_n2').val());                    
        var param_k0 = parseFloat($('#param_k0').val());
        var param_e0 = parseFloat($('#param_e0').val());
        var param_l0 = parseFloat($('#param_l0').val());
        var kstar1 = Math.pow(param_s1*param_A1/(param_delta1+param_n1+param_g1),1/(1-param_alpha1));
        var kstar2 = Math.pow(param_s2*param_A2/(param_delta2+param_n2+param_g2),1/(1-param_alpha2));
        var interval = 0

        var input = document.getElementById ("steady");
            if (input.checked == true) {
                var param_k0 = kstar1;
            } else {
                var param_k0 = param_k0;
            }
        if (tmax<=30) {
            interval = 5;
        }
        else if (30<tmax&&tmax<=100) {
            interval = 20;
        }
        else if (100<tmax&&tmax<=500) {
            interval = 100;
        }
        else {
            interval = 500;
        }



        $('#inv_per_worker').highcharts({
            chart: {
                type: 'line',
                marginRight: 10,
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker : {
                        enabled : true,
                        radius : 3},
                    animation: {
                        duration: 10000     //Controls the time required for plot to be fully rendered.
                    }
                }
            },

            title: {
                text: 'Investment Per Worker',
                style: {
                    "fontSize": "15px" 
                }
            },
            tooltip: {
                shape: "square"
            },
            xAxis: {
                // type: 'datetime',
                // tickPixelInterval: 150,
                tickInterval: interval,
                text: 'Time'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() 
                    {
                        return Math.round(this.value*100)/100;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },

            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'i',
                data: (function () {
                    var data = [],
                            i,
                            e=param_e0,
                            k=param_k0;

                    for (i = 0; i <= tmax; i++) {
                        if (i<5) {
                            data.push({
                            x: i,
                            y: Math.round(100000*e*(param_s1)*param_A1*Math.pow(k,param_alpha1))/100000
                        })
                            elag=e,
                            e=(1+param_g1)*elag,
                            klag=k,
                            k = klag + param_s1*param_A1*Math.pow(klag,param_alpha1) - (param_delta1+param_n1+param_g1)*klag
                        }
                        else {
                            data.push({
                            x: i,
                            y: Math.round(100000*e*(param_s2)*param_A2*Math.pow(k,param_alpha2))/100000
                        })
                            elag=e,
                            e=(1+param_g1)*elag,
                            klag=k,
                            k = klag + param_s2*param_A2*Math.pow(klag,param_alpha2) - (param_delta2+param_n2+param_g2)*klag
                        }
                    }
                    return data;
                })()
            }
            ]
        });
    }) //.trigger('submit');
});
