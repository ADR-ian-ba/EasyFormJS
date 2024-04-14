function gIT(i) {
    return document.getElementById(i).value;
}

class GoogleFormSubmitter{
    constructor(formUrl){
        this.formUrl = formUrl;
        this.details = {};
    }

    setDetail(key, value){
        this.details["entry." + key] = value;
    } 

    getDetail(key) {
        return this.details["entry." + key];
    }

    prepareFormBody(){
        let formBody = [];
        for(const each in this.details){
            const encodeKey = encodeURIComponent(each);
            const encodeValue = encodeURIComponent(this.details[each])
            formBody.push(encodeKey + "=" + encodeValue);
        }
        return formBody.join("&");
    }

    submit() {
        fetch(this.formUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'insomnia/8.6.1'
            },
            body: this.prepareFormBody()
        }).then(response => console.log("Form submitted successfully", response))
          .catch(error => console.error("Failed to submit form", error));
    }
}

module.exports = {gIT, GoogleFormSubmitter}
