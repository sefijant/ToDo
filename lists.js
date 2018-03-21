
var app = angular.module("ToDo", []);
app.controller("MainController", function ($scope) {
    var categories = [{ "name": "קניות", "image": ".\\resources\\shopping.jpg", "modal": "#shopping" }, { "name": "צבא", "image": ".\\resources\\army.jpg", "modal": "#army" }, { "name": "טיולים", "image": ".\\resources\\travel.jpg", "modal": "#travel" }, { "name": "אחר", "image": ".\\resources\\else.jpg", "modal": "#other" }];
    $scope.categories = categories;

    (function ($) {
        $(function () {
    
            //initialize all modals           
            $('.modal').modal();
    
        }); // end of document ready
    })(jQuery);

    lists = {
        "lists": [
            {
                "name": "טראקים בדרום אמריקה",
                "category": "travel",
                "items": [
                    "תרמיל גב במבנה משולב או במבנה שק",
                    "תיק קטן 30-40 ליטר",
                    "כיסוי תרמיל",
                    "כבל לאבטחת התרמיל",
                    "רצועת הארכה לתרמיל לקשירת ציוד חיצונית",
                    "מעיל גשם עדיף אטום לגשם ונושם",
                    "ז'קט פליס / סופטשל",
                    "כפפות",
                    "חם צוואר",
                    "מכנס טיולים ארוך",
                    "נעלי הליכה",
                    "גרבי הליכה לתנאים קרים",
                    "סנדלי טיולים",
                    "כלי רחצה",
                    "בגד ים"
                ],
                "uses": 0
            },
            {
                "name": "תאילנד בזול",
                "category": "travel",
                "items": [
                    "דרכון",
                    "כרטיסי טיסה",
                    "רישיון נהיגה",
                    "כרטיס אשראי בינלאומי",
                    "ביטוח",
                    "פנקס חיסונים",
                    "צילומים של כל המסמכים",
                    "תווית זיהוי לתיקים",
                    "חגורת/גרב כסף",
                    "כסף מזומן",
                    "ארנק",
                    "טלפון נייד + מטען",
                    "מתאמים שונים לחשמל",
                    "ספר",
                    "שיחון",
                    "כלי כתיבה",
                    "עזרה ראשונה",
                    "תיק רחצה"
                ],
                "uses": 0
            },
            {
                "name": "אמסטרדם לסאחים",
                "category": "travel",
                "items": [
                    "מכנסיים",
                    "חולצות",
                    "תחתונים",
                    "גרביים",
                    "גופיות",
                    "סווטשרטים",
                    "סוודרים",
                    "מעיל / פליז / מעיל רוח",
                    "פיג'מה",
                    "בגד ים",
                    "מגבת",
                    "נעליים / ספורט / יציאה / סנדלים / בית / קרוקס",
                    "תיק רחצה"
                ],
                "uses": 0
            },
            {
                "name": "גיוס לוחמים",
                "category": "army",
                "items": [
                    "רעל בעיניים",
                    "חולצות",
                    "תחתונים",
                    "גרביים",
                    "רוח צהל",
                    "תרמיל גב גדול",
                    "וואסח",
                    "שעון Gshock",
                    "מצית לשפצורים",
                    "בגדי ספורט",
                    "מגבת",
                    "נעליים / ספורט / יציאה / סנדלים / בית / קרוקס",
                    "תיק רחצה"
                ],
                "uses": 0
            },
            {
                "name": "גיוס ג'ובניקים",
                "category": "army",
                "items": [
                    "תרמיל גב גדול",
                    "חולצות",
                    "תחתונים",
                    "גרביים",
                    "גופיות",
                    "פלאפון",
                    "סוודרים",
                    "מעיל / פליז / מעיל רוח",
                    "פיג'מה",
                    "אוכל של אמא",
                    "מגבת",
                    "כפכפים",
                    "תיק רחצה"
                ],
                "uses": 0
            },
            {
                "name": "הגנ''ש",
                "category": "army",
                "items": [
                    "תרמיל גב גדול",
                    "חולצות",
                    "תחתונים",
                    "גרביים",
                    "גופיות",
                    "פלאפון",
                    "סוודרים",
                    "מעיל / פליז / מעיל רוח",
                    "פיג'מה",
                    "שק שינה",
                    "מגבת",
                    "כפכפים",
                    "תיק רחצה",
                    "אלטוש",
                    "דיאורדורנט",
                    "גליל נייר טואלט אחד (ניהול סיכונים)",
                    "קרם הגנה"
                ],
                "uses": 0
            },
            {
                "name": "ציוד למנגל",
                "category": "shopping",
                "items": [
                    "מנגל",
                    "נקניקיות",
                    "קבב",
                    "המבורגר",
                    "פרגיות",
                    "סטייקים",
                    "חומוס",
                    "טחינה",
                    "כרוב סגול/לבן",
                    "פיתות",
                    "שימורים",
                    "פחמים",
                    "נפנף",
                    "מדליק למנגל",
                    "שתיה קלה",
                    "מים",
                    "אלכוהול"
                ],
                "uses": 0
            },
            {
                "name": "ציוד למסיבת יום הולדת",
                "category": "shopping",
                "items": [
                    "עוגה",
                    "נרות",
                    "שתיה קלה",
                    "בלונים",
                    "מפיות",
                    "כוסות וסכום חד פעמי",
                    "אוכל",
                    "בידור"
                ],
                "uses": 0
            },
            {
                "name": "רשימה ליולדת",
                "category": "other",
                "items": [
                    "תעודת זהות",
                    "בגדים נוחים",
                    "חלוק",
                    "נעלי בית",
                    "כרית נוחה מהבית",
                    "כפכפים",
                    "מגבת",
                    "תיק רחצה"
                ],
                "uses": 0
            }
        ]
    };
    localStorage.setItem('allLists', JSON.stringify(lists));
    $scope.travelLists = [];
    $scope.armyLists = [];
    $scope.shoppingLists = [];
    $scope.otherLists = [];
    for (var i in lists.lists) {
        if (lists.lists[i].category == "travel") {
            $scope.travelLists.push(lists.lists[i]);
        }
        else if (lists.lists[i].category == "army") {
            $scope.armyLists.push(lists.lists[i]);
        }
        else if (lists.lists[i].category == "shopping") {
            $scope.shoppingLists.push(lists.lists[i]);
        }
        else {
            $scope.otherLists.push(lists.lists[i]);
        }
    }

    
    var tmp = localStorage.getItem('allLists');

});

