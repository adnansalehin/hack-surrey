package investment;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.fluent.*;
import org.apache.http.entity.ContentType;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class LearnInvestmentApp {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(LearnInvestmentApp.class, args);
		System.out.print(getResponse());
	}
	public static String getResponse() throws java.io.IOException  {
//		Content c = Request.Post("https://idfs.gs.com/as/token.oauth2")
//				.bodyForm(Form.form()
//						.add("grant_type",    "client_credentials")
//						.add("client_id",     "2fef030f63ce4785bf9dae1bade57d99")
//						.add("client_secret", "09bc68a1028bdaee38d51570be66d845181a7781a20c266cca95d9d5fe8930b8")
//						.add("scope",         "read_content read_financial_data read_product_data read_user_profile")
//						.build()
//				)
//				.execute().returnContent();
//		String accessToken = new ObjectMapper().readTree(c.asString()).get("access_token").asText();
//
//		String serviceResponse = Request.Get("https://api.marquee.gs.com/simple-api-test/v1/test")
//				.addHeader("Authorization", "Bearer " + accessToken)
//				.execute().returnContent().asString();

		String serviceResponse = Request
				.Post("https://api.marquee.gs.com/v1/data/USCANFPP_MINI/query")
				.bodyString("{'where':{'ticker':['FB']},'startDate':'2017-01-01','endDate':'2018-01-01'}", ContentType.APPLICATION_JSON)
				.addHeader("Authorization", "Bearer c4XdqSU8MLeB3owjX9yJxkv9mKHa")
				.execute().returnContent().asString();
		return serviceResponse;
	}

}
