from fake_useragent import UserAgent
import requests
from bs4 import BeautifulSoup as BS
from twython import Twython, TwythonError
import time 
import schedule


def twitter_api():

    app_key = "D21Q718kjG6mG6lbNnhDSeoC2"
    app_secret ="88Lvh7MT5TSsXoi1XVpgJGGR5MO4BsLud1vpr4PGrtXxXj68Rh"
    oauth_token = "1102317081943371776-xYcyrwsvWbFeSDWo5itFVJ7F7UcwaE"
    oauth_token_secret ="O0G187R8eZ4ehu2Pm5SwDFX29C06ZRRvZjHxTvaZw0RTZ"

    twitter = Twython(app_key, app_secret, oauth_token, oauth_token_secret)
    return twitter

def tweet(status):

    api = twitter_api()
    try:
        api.update_status(status=status)
        print("Tweet successfully sent!")
        time.sleep(120)
    except TwythonError as e:
        print(e)

def scrape_and_tweet():

    ua = UserAgent()
    print(ua.chrome)
    header = {'User-Agent':str(ua.chrome)}
    # print(header)
    #url = "https://www.trucharts.com/FilteredStocks.aspx?ConditionId=346820"
    #url = "https://www.trucharts.com/FilteredStocks.aspx?ConditionId=347018%2c347019%2c347020"
    url = "https://www.trucharts.com/FilteredStocks.aspx?ConditionID=348357,348358,348359"
    htmlContent = requests.get(url, headers=header)
    soup = BS(htmlContent.content, 'html.parser')

    stock_name = [ stock.get_text(strip=True) for stock in soup.select('td div a') ]
    stock_name = stock_name[2:-8]
    stock_price = [ price.get_text(strip=True) for price in soup.select('tr > td:nth-of-type(5) ')]
    percentage_change = [ change.get_text(strip=True) for change in soup.select('tr > td:nth-of-type(11) ')]

    for s_name, s_price, p_change in zip(stock_name, stock_price, percentage_change):

        status = f"Bullish: ${s_name}, {s_price}, {p_change}"
        tweet(status)


schedule.every().day.at('12:00')

if __name__ == "__main__":
    print('Tweeting every day at 9am ')
        #while True:
        # schedule.run_pending()
#time.sleep(1)

scrape_and_tweet()
