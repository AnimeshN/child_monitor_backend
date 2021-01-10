const pool = require("../../config/keys").pool;

const getWFH = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    if (gender == 'girl' && flag =='0'){
        console.log("Inside if loop");
        pool.query('SELECT * FROM girls023_wfl' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let length = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const length_ = data[index].length_cm;
                    length.push(length_);

                    const minus_three_sd_ = data[index].sam;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].mam_min;
                    minus_two_sd.push(minus_two_sd_);

                    const plus_two_sd_ = data[index].overweight_min;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].overweight_max;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'length': length,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });

    }
};

const getGirlsLFA = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    if (flag =='0'){

        pool.query('SELECT * FROM lfa_girls_0_2_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });

    }

    else if (flag == 1){
        pool.query('SELECT * FROM hfa_girls_2_5_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });
    }
}



module.exports = {
    getWFH,
    getGirlsLFA
}