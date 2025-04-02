package com.kh.start.member.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.start.member.model.dto.ChangePasswordDTO;
import com.kh.start.member.model.dto.MemberDTO;
import com.kh.start.member.model.service.MemberService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("members")
@RequiredArgsConstructor
public class MemberController {
	
	private final MemberService memberService;
	
	// 회원가입 자원 요청을 받으면서
	// 아이디/비밀번호/이름 받아가지고 가공해서
	// 서비스로 넘긴다 -> 여기서 일어나는 일은 모름
	// 서비스로부터 된걸 받아서
	// JSON형태로 상태코드와 함께 넘긴다
	
	// /members == 약속
	// GET 					--> 조회 요청(SELECT)
	// GET(/members/멤버번호) --> 멤버번호로 조건을 걸어서 단일 조회 요청(SELECT)
	// POST					--> 데이터 생성 요청(INSERT)
	// PUT					--> 데이터 갱신 요청(UPDATE)
	// DELETE				--> 데이터 삭제 요청(DELETE)
	
	// 계층구조로 식별할 때 /자원/PK
	// 요청 시 전달값이 많을 때 / 자원?키=값&키=값&키=값
	
	@PostMapping
	public ResponseEntity<?> signUp(@RequestBody @Valid MemberDTO member){
		// log.info("내가 받음? {}", member);	
		memberService.signUp(member);
		return ResponseEntity.status(201).build();
	}
	/*
	 * 원래 비밀번호 :
	 * 바꿀 비밀번호 : 
	 * 바꿀 비밀번호 확인 : 
	 */
	
	// 회원정보 수정
	@PutMapping
	public ResponseEntity<?> changePassword(@RequestBody @Valid ChangePasswordDTO passwordEntity){
		// log.info("비밀번호 : {}", passwordEntity);
		memberService.changePassword(passwordEntity);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@DeleteMapping
	public ResponseEntity<?> deleteByPassword(@RequestBody Map<String, String> request){
		// log.info("이게오나?", request);
		memberService.deleteByPassword(request.get("password"));
		return ResponseEntity.ok("오케이에요");
	}
	
	
	
}
