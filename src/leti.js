export default class Leti {
    get defaultOptions() {
        return {
            types: {
                succes: {
                    message: "Success"
                },
                error: {
                    message: "Error"
                },
            },
            position: "bottom right",
        };
    }
    constructor(options) {
        this.options = Object.assign(this.defaultOptions, options);
        this.buildMethodsFromTypes(this.options);
    }

    buildMethodsFromTypes(options) {
        Object.keys(options.types).forEach(key => {
            console.log(key);
            Object.defineProperty(this, key, {
                value: () => {
                    this.triggerNotification(this.options.types[key]);
                }
            });
        });
    }

    triggerNotification(options) {
        console.log(options.message);
    }
}