var way_arr = [];//運算字串，接收數字及運算符
var btn_txt = document.getElementsByClassName("btn");//數字及運算符的按鈕
var txt = document.getElementsByClassName("txt")[0];//輸出視窗
var btn_way = document.getElementsByClassName("btn_click");//刪減按鈕
var record_arr = document.getElementsByClassName("record")[0];//歷程記錄
var re;

for (var i = 0; i < btn_txt.length; i++) 
{
    btn_txt[i].onclick = function () 
    {
        record_arr.value=record_arr.value+this.value;        
        if (!isNaN(this.value) || this.value == ".") 
        {
            if (txt.value.indexOf(".") != -1) 
            {
                if (this.value != ".") 
                {txt.value += this.value;}
            }
            else if(!isNaN(txt.value))
            {txt.value += this.value;}
            else
            {
                txt.value ="";
                txt.value += this.value;
            }
        }
        else 
        {
            if (this.value != "=") 
            {
                way_arr[way_arr.length] = txt.value;
                way_arr[way_arr.length] = this.value;
                txt.value = this.value;
            }
            else 
            {
                if (!isNaN(this.value) || this.value == ".") 
                {
                    if (txt.value.indexOf(".") != -1) 
                    {
                        if (this.value != ".") 
                        {txt.value += this.value;}
                    }
                    else 
                    {txt.value += this.value;}
                }
                way_arr[way_arr.length] = txt.value;
                txt.value = Number(eval(way_arr.join("")).toPrecision(12));
                record_arr.value=record_arr.value+eval(way_arr.join(""));
                record_arr.value=record_arr.value+"\n"+eval(way_arr.join(""));
                if(eval(way_arr.join(""))==0)
                {record_arr.value=record_arr.value.substr(0, record_arr.value.length - 1);}

                re=txt.value.length;
                console.log(re);
                way_arr = [];
            }
        }
        
    }
}
for (var i = 0; i < btn_way.length; i++) 
{
    btn_way[i].onclick = function () 
    {
        if (this.value == "AC") 
        {
            way_arr = [];
            record_arr.value = record_arr.value.substr(0, record_arr.value.length-re);
            txt.value = "";
        }
        else if(this.value == "DEL")
        {
            txt.value = txt.value.substr(0, txt.value.length - 1);
            record_arr.value = record_arr.value.substr(0, record_arr.value.length - 1);
        }
    }
}
