# cn-charnet
WordNet for Chinese Character is a network that includes inter-character relationships of various Chinese characters. Think of words as nodes and inter-word relations as edges. Inter-word relations include whole-part, phonetic-loan, variant and
other relations. In terms of data acquisition, it use the Unihan database to obtain a list of all Chinese characters in the cjk coding range, and use python's scrapy framework to crawl other required data, and provide users with data submission and
review functions. The project is presented in the form of a web page, the front-end uses the Vue framework, and the backend is developed using Node.js.
