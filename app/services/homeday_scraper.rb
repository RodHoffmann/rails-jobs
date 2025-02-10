class HomedayScraper < BaseScraper
  URL = 'https://homeday.jobs.personio.de/'.freeze

  def initialize
    super(URL)
  end

  def extract_data
    return {} unless @doc
    positions = @doc.css('div.tab-content-wrapper a')
    positions.map do |position|
      next unless is_an_engineer_position?(position)
      {
        title: position.css('div.jb-title').text,
        link: "#{URL}#{position['href']}",
        company: 'Homeday'
      }
    end.compact.uniq
  end
end
