package com.hack.surrey.learn.investment

import com.fasterxml.jackson.databind.ObjectMapper
import org.apache.http.client.fluent.*
//import org.apache.http.entity.ContentType
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class Authenticate {
//	@Throws(java.io.IOException::class)
	fun main(args: Array<String>) {
		runApplication<Authenticate>(*args)
//		val c: Content = Request.Post("https://idfs.gs.com/as/token.oauth2")
//			.bodyForm(
//				Form.form()
//					.add("grant_type", "client_credentials")
//					.add("client_id", "2fef030f63ce4785bf9dae1bade57d99")
//					.add("client_secret", "09bc68a1028bdaee38d51570be66d845181a7781a20c266cca95d9d5fe8930b8")
//					.add("scope", "read_content read_financial_data read_product_data read_user_profile")
//					.build()
//			)
//			.execute().returnContent()
//		val accessToken = ObjectMapper().readTree(c.asString()).get("access_token").asText()
//
//		val serviceResponse = Request.Get("https://api.marquee.gs.com/simple-api-test/v1/test")
//			.addHeader("Authorization", "Bearer $accessToken")
//			.execute().returnContent().asString()
//
//		println(serviceResponse)

	}
}