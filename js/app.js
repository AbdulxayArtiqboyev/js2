{
        // case1 
        function Day(a) {
            switch (a) {
                case 1:
                    return "Duyshanba"
                case 2:
                    return "Seyshanba"
                case 3:
                    return "chorshanba"
                case 4:
                    return "Payshanba"
                case 5:
                    return "Juma"
                case 6:
                    return "Shanba"
                case 7:
                    return "Yakshanba"
                default:
                    return  "Bunday hafta kuni yoq"
            }
        }
        console.log(Day(1));
    }
    {
        // case 2
        function narx(k){
            switch (k){
                case 1:
                return "yomon"
                 case 2:
                return "qoniqarsiz"
                 case 3:
                return "qoniqarli"
                 case 4:
                return "yaxshi"
                 case 5:
                return "alo"
                default:
                    return "xato"
            }
        }
        console.log(narx(6));
    }
    {
        // case 3 masla
        function moon(n) {
            switch (n) {
                case 1:
                    return " 1 oy qish"
                case 2:
                    return "2 oy qish"
                case 3:
                    return "3 oy qish"
                case 4:
                    return "4 oy baxor"
                case 5:
                    return "5 oy baxor"
                case 6:
                    return "6 oy baxor"
                case 7:
                    return "7 oy yoz"
                case 8:
                    return "8 oy yoz"
                case 9:
                    return "9 oy yoz"
                case 10:
                    return "10 oy kuz"
                case 11:
                    return "11 oy kuz"
                case 12:
                    return "12 oy kuz"
    
                default:
                    return "bunday oy yoq"
    
            }
        }
        console.log(moon(6));
    }
    
    {
        // case 4 masla
        function moon(n) {
            switch (n) {
                case 4:
                case 6:
                case 9:
                case 11:
                    return "30 kundan iborat"
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 9:
                case 10:
                    return "31 kundan iborat"
                case 2:
                    return "28 kundan iborat"
                default:
                    return "bunday oy kunlari yo"
            }
        }
        console.log(moon(4));
    }
    
        // case 5
        function son(a, b, amal){
            let sum;
            switch (amal) {
                case 1:
                    sum = a + b;
                    break;
                case 2:
                    sum = a - b;
                    break
                case 3:
                    sum = a / b;
                    break;
                case 4:
                    sum = a * b;
                    break;
                }
    
            }